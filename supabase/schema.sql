create extension if not exists pgcrypto;

create table if not exists public.france_solaire_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  entreprise text not null,
  contact text not null,
  telephone text not null,
  email text not null,
  commune text not null,
  besoin text not null,
  surface text,
  delai text,
  message text,
  source text not null default 'site-web',
  user_agent text,
  statut text not null default 'nouveau'
);

alter table public.france_solaire_leads enable row level security;

create index if not exists france_solaire_leads_created_at_idx
  on public.france_solaire_leads (created_at desc);

comment on table public.france_solaire_leads is
  'Demandes de devis envoyées depuis le site France Solaire.';
