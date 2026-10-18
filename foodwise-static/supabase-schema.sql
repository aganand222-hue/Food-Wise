-- Run this once in your Supabase project's SQL Editor (left sidebar → SQL Editor → New query).

create table feedback (
    id            bigserial primary key,
    ease_of_use   text not null,
    liked_features text not null,
    satisfaction  text not null,
    design_rating smallint not null,
    suggestions   text,
    submitted_at  timestamptz default now()
);

-- Row Level Security is on by default for new Supabase tables.
-- These two policies let the public feedback form insert rows,
-- and let the public results page read them back, using only the
-- anon public key (never your secret service key).
alter table feedback enable row level security;

create policy "Allow public insert"
    on feedback for insert
    to anon
    with check (true);

create policy "Allow public read"
    on feedback for select
    to anon
    using (true);
