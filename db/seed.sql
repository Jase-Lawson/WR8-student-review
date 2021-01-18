create table trainers (
trainer_id serial primary key,
name varchar(60),
password varchar(60)
);

create table team (
name varchar(60),
trainer_id int references trainers(trainer_id),
api_id int
);