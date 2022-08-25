### Exercício 1

a) um chave estrangeira associa o id de uma tabela à outra tabela.

b)

```
insert into Rating values
('1', 'Bom', 8, '002');

insert into Rating values
('2', 'Ótimo', 9, '003');

insert into Rating values
('3', 'Excelente', 9, '004');
```

c) ao tentar adicionar uma avaliação à um filme que não existe, é retornado o código de erro 1452, que informa que não há como adicionar ou atualizar uma linha em uma coluna inexistente.

d)

```
alter table Movies
drop rating;
```

e) ao tentar deletar um filme que contém avaliação, recebemos o código de erro 1451, que informa que não há como deletar uma tabela "pai", pois outras tabelas dependem dos seus dados.

### Exercício 2

a) a tabela tem somente duas colunas? "movie_id" e "actor_id", essas colunas são referenciadas nas tabelas de atores e de filmes. Assim, há a possibilidade de relacionar as duas tabelas.

b)

```
insert into MovieCast values
('002', '001'), ('002', '002'), ('003', '003'),
('003','004'), ('004', '001'),('004','002');
```

c) ao tentar adicionar uma relação à um filme que não existe, é retornado o código de erro 1452, que informa que não há como adicionar ou atualizar uma linha em uma coluna inexistente.

d) ao tentar deletar um ator que contém relação, recebemos o código de erro 1451, que informa que não há como deletar de tabela "pai", pois outras tabelas dependem dos seus dados.

### Exercício 3

a) a query seleciona todos os dados da tabela "Movie", e também adiciona os Ratings de cada filme relacionado à tabela. O operador "ON" busca quando o id na tabela de filmes é o mesmo do id relacionado na tabela de ratings.

b)

```
SELECT title, Movies.id, rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

### Exercício 4

a)

```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b)

```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)

```
select avg(r.rate), m.id, m.title from Movies m
JOIN Rating r ON m.id = r.movie_id
group by (m.id);
```

### Exercício 5

a) primeiro, há a relação dos filmes com a tabela de relação, e depois, com a tabela de atores. Há a necessidade de 2 JOINS, pois há a união de 3 tabelas

b)

```
SELECT m.id, m.title as titulo, a.id, a.name as nome FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) em "m,title" deveria estar "m.title"

d)

```
SELECT m.title, a.name, r.rate, r.comment FROM Movies m
JOIN Rating r ON m.id = r.movie_id
JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
