const MAX_LENGTHS = {
  entreprise: 160,
  contact: 160,
  telephone: 50,
  email: 254,
  commune: 160,
  besoin: 160,
  surface: 160,
  delai: 160,
  message: 4000,
};

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function parseBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return Object.fromEntries(new URLSearchParams(req.body));
  }

  return {};
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Méthode non autorisée");
  }

  const body = parseBody(req);

  if (body.website) {
    res.setHeader("Location", "/merci/");
    return res.status(303).end();
  }

  const lead = Object.fromEntries(
    Object.entries(MAX_LENGTHS).map(([key, maxLength]) => [
      key,
      clean(body[key], maxLength),
    ]),
  );

  if (
    !lead.entreprise ||
    !lead.contact ||
    !lead.telephone ||
    !lead.email ||
    !lead.commune ||
    !lead.besoin
  ) {
    return res.status(400).send("Merci de compléter les champs obligatoires.");
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Supabase environment variables are missing.");
    return res.status(503).send("Le formulaire est temporairement indisponible.");
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/france_solaire_leads`,
    {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        ...lead,
        source: "site-web",
        user_agent: clean(req.headers["user-agent"], 500),
      }),
    },
  );

  if (!response.ok) {
    console.error("Supabase insert failed:", response.status, await response.text());
    return res.status(502).send("La demande n’a pas pu être enregistrée.");
  }

  res.setHeader("Location", "/merci/");
  return res.status(303).end();
};
