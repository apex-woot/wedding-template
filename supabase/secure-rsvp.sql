revoke select on table rsvp from anon;

create table if not exists rsvp_rate_limit (
  ip text not null,
  created_at timestamptz not null default now()
);

alter table rsvp_rate_limit enable row level security;

create index if not exists idx_rsvp_rate_limit_ip_created on rsvp_rate_limit (ip, created_at);

create or replace function submit_rsvp(
  p_family_surname text,
  p_adults_count smallint,
  p_children_count smallint,
  p_attending boolean,
  p_hotel_booking boolean,
  p_transfer_needed boolean,
  p_attending_church boolean,
  p_ip text default ''
) returns text
language plpgsql security definer
as $$
declare
  total_count int;
  ip_recent int;
  clean_surname text;
begin
  clean_surname := trim(p_family_surname);

  if length(clean_surname) < 2 or length(clean_surname) > 100 then
    return 'validation';
  end if;

  if clean_surname ~ '[<>"'';\x00-\x1f]' then
    return 'validation';
  end if;

  if p_adults_count < 0 or p_adults_count > 20 then
    return 'validation';
  end if;

  if p_children_count < 0 or p_children_count > 20 then
    return 'validation';
  end if;

  select count(*) into total_count from rsvp;
  if total_count >= 100 then
    return 'error';
  end if;

  if p_ip <> '' then
    delete from rsvp_rate_limit where created_at < now() - interval '10 minutes';

    select count(*) into ip_recent
    from rsvp_rate_limit
    where ip = p_ip and created_at > now() - interval '1 minute';

    if ip_recent >= 3 then
      return 'rate_limit';
    end if;

    insert into rsvp_rate_limit (ip) values (p_ip);
  end if;

  if exists (select 1 from rsvp where family_surname = clean_surname) then
    return 'duplicate';
  end if;

  insert into rsvp (family_surname, adults_count, children_count, attending, hotel_booking, transfer_needed, attending_church)
  values (clean_surname, p_adults_count, p_children_count, p_attending, p_hotel_booking, p_transfer_needed, p_attending_church);

  return null;
end;
$$;
