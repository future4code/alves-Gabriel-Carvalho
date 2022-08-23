### Exercício 1

a) o comando removeria a coluna de salário dos atores.

b) o comando altera o título do parâmetro "gender" para "sex" e seu tipo para VARCHAR com no máximo 6 caracteres.

c) o comando altera somente o tipo para VARCHAR com no máximo 255 caracteres, mantendo o mesmo título.

d) query:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a) query:

```
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1966-05-16"
WHERE id = "003";
```

b) query:

```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

```

c) query:

```
UPDATE Actor
SET name= "Roberto", salary = 1000000, birth_date="1980-05-20", gender="male"
WHERE id = "005";
```

d) query:

```
UPDATE Actor
SET name= "Roberto", salary = 1000000, birth_date="1980-05-20", gender="male"
WHERE id = "111";
```

o comando foi aceito, mas não alterou nenhuma linha, pois o id não existe.

### Exercício 3

a) query:

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) query:

```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a) query:

```
SELECT MAX(salary) FROM Actor;
```

b) query:

```
select min(salary) from Actor where gender ="female";
```

c) query:

```
select count(*) from Actor where gender ="female";
```

d) query:

```
select sum(salary) from Actor;
```

### Exercício 5

a) a query conta quantos atores há em cada gênero e os agrupa em gêneros.

b) query:

```
SELECT id, name FROM Actor
order by name desc;
```

c) query:

```
select * from Actor
order by salary asc;
```

d) query:

```
select * from Actor
order by salary desc
limit 3;
```

e) query:

```
select avg(salary), gender
from Actor
group by gender;
```

### Exercício 6

a) query;

```
alter table Movies
add playing_limit_date DATE;
```

b) query;

```
alter table Movies
change rating rating float;
```

c) query;

```
update Movies
set playing_limit_date ="2022-06-23"
where title = "Doce de mãe";

update Movies
set playing_limit_date ="2022-10-23"
where title = "Bacurau";
```

d) query;

```
delete from Movies where id ="001";

update Movies
set sinopse="Teste"
where id = "001";
```

o comando foi aceito, mas nada foi alterado, pois o filme com o id "001" não existe.

### Exercício 7

a) query:

```
select count(*)
from Movies
where rating > 7.5;
```

b) query:

```
select avg(rating)
from Movies;
```

c) query:

```
select count(*)
from Movies
where playing_limit_date > now();
```

d) query:

```
select count(*)
from Movies
where release_date > NOW();
```

e) query:

```
select max(rating)
from Movies;
```

f) query:

```
select min(rating)
from Movies;
```

### Exercício 8

a) query:

```
select * from Movies
order by title asc;
```

b) query:

```
select * from Movies
order by title desc
limit 5;
```

c) query:

```
select * from Movies
order by release_date desc
limit 3
```

d) query:

```
select * from Movies
order by rating desc
limit 3;
```
