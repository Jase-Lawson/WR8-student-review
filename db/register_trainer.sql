insert into trainers
(name, password)
values ($1, $2)
returning *;