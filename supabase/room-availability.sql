drop function if exists get_room_availability();

create or replace function get_room_availability()
returns table(room_type text, booked int)
language sql
security definer
stable
as $$
  select room_type, count(*)::int as booked
  from rsvp
  where room_type in ('double', 'triple', 'house')
  group by room_type;
$$;

revoke all on function get_room_availability() from public;
grant execute on function get_room_availability() to anon, authenticated;
