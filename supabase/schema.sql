-- GoMove — table des réservations de courses
-- À exécuter dans Supabase : Project > SQL Editor > New query

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  pickup text not null,
  destination text not null,
  scheduled_date date,
  scheduled_time time,
  phone text not null,
  vehicle text not null,
  notes text
);

-- Sécurité : active la Row Level Security sur la table
alter table public.bookings enable row level security;

-- Autorise n'importe quel visiteur du site (rôle "anon") à CRÉER une
-- réservation, mais pas à lire, modifier ou supprimer les réservations
-- des autres. Pour consulter les réservations, utilisez le tableau de
-- bord Supabase (Table editor) ou une clé "service role" côté serveur.
create policy "Public can insert bookings"
  on public.bookings
  for insert
  to anon
  with check (true);
