alter table rsvp add constraint rsvp_family_surname_unique unique (family_surname);

create or replace function submit_rsvp(
  p_family_surname text,
  p_adults_count smallint,
  p_children_count smallint,
  p_attending boolean,
  p_hotel_booking boolean,
  p_transfer_needed boolean,
  p_attending_church boolean
) returns text
language plpgsql security definer
as $$
declare
  total_count int;
  recent_count int;
begin
  select count(*) into total_count from rsvp;
  if total_count >= 100 then
    return 'error';
  end if;

  select count(*) into recent_count
  from rsvp
  where created_at > now() - interval '1 minute';
  if recent_count >= 5 then
    return 'rate_limit';
  end if;

  if exists (select 1 from rsvp where family_surname = p_family_surname) then
    return 'duplicate';
  end if;

  insert into rsvp (family_surname, adults_count, children_count, attending, hotel_booking, transfer_needed, attending_church)
  values (p_family_surname, p_adults_count, p_children_count, p_attending, p_hotel_booking, p_transfer_needed, p_attending_church);

  return null;
end;
$$;
