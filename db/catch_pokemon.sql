insert into team
(name, trainer_id, api_id, sprite_url)
values ($1, $2, $3, $4);

select * from team where trainer_id = $2;