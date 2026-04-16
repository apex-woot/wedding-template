alter table rsvp
  add column if not exists room_type text not null default '';

alter table rsvp
  drop constraint if exists rsvp_room_type_check;

alter table rsvp
  add constraint rsvp_room_type_check
  check (room_type in ('', 'double', 'triple', 'house'));

drop function if exists submit_rsvp(text, smallint, smallint, boolean, boolean, boolean, boolean);
drop function if exists submit_rsvp(text, smallint, smallint, boolean, boolean, boolean, boolean, text);

create or replace function submit_rsvp(
  p_family_surname text,
  p_adults_count smallint,
  p_children_count smallint,
  p_attending boolean,
  p_hotel_booking boolean,
  p_transfer_needed boolean,
  p_attending_church boolean,
  p_room_type text,
  p_ip text default ''
) returns text
language plpgsql security definer
as $$
declare
  total_count int;
  ip_recent int;
  clean_surname text;
  clean_room_type text;
begin
  clean_surname := trim(p_family_surname);
  clean_room_type := coalesce(p_room_type, '');

  if length(clean_surname) < 2 or length(clean_surname) > 100 then
    return 'validation';
  end if;

  if clean_surname ~ '[<>";\x00-\x1f]' then
    return 'validation';
  end if;

  if p_adults_count < 0 or p_adults_count > 20 then
    return 'validation';
  end if;

  if p_children_count < 0 or p_children_count > 20 then
    return 'validation';
  end if;

  if clean_room_type not in ('', 'double', 'triple', 'house') then
    return 'validation';
  end if;

  if not p_hotel_booking then
    clean_room_type := '';
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

  insert into rsvp (
    family_surname,
    adults_count,
    children_count,
    attending,
    hotel_booking,
    transfer_needed,
    attending_church,
    room_type
  )
  values (
    clean_surname,
    p_adults_count,
    p_children_count,
    p_attending,
    p_hotel_booking,
    p_transfer_needed,
    p_attending_church,
    clean_room_type
  );

  return null;
end;
$$;
