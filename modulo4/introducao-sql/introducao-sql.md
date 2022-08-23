### Exercício 1

a) o comando CREATE TABLE cria uma tabela; o comando VARCHAR(255) cria um tipo string para "nome" com no máximo 255 linhas; o comando DATE cria um tipo data para "birth_date".

b) o comando SHOW DATABASES mostra as bases de dados disponíveis; o comando SHOW TABLES mostra as tabelas que foram criadas.

c) o comando DESCRIBE, mostra campos, as keys, os tipos e se os elementos são nulos.

### Exercício 2

a) query:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

b) código de erro 1062. Entrada duplicada '002' para a chave 'PRIMARY'. O erro aconteceu, pois já existia uma key primária referente à string '002'.

c) A quantidade de colunas não corresponde à quantidade de linhas, ou seja, foram declarados somente 3 variáveis com a tentativa de inserir 5 elementos.

d) o campo "nome" deveria ter algum valor, pois foi declarado NOT NULL na criação da tabela.

e) o valor da data está sem as aspas, logo o programa faz uma subtração dos números.

## Exercício 3

a) query:

```
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
```

b) query:

```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) query:

```
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";
```

não foi retornado nada, pois nenhum dos gêneros cadastrados foi "invalid"

d) query:

```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e) Código de Erro: 1054. Coluna 'nome' desconhecida. O nome está como "name" e não "nome", por isso o erro.

```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4

a) a query importa todas as informações dos atores que começam com a letra A ou J, e que o salário é maior que 300.000.

b) query:

```
SELECT * FROM Actor
WHERE ( name NOT LIKE "A%") AND salary > 350000;
```

c) query:

```
SELECT * FROM Actor
WHERE name LIKE "%G%" or name LIKE "%g%";
```

d) query:

```
SELECT * FROM Actor
WHERE (name LIKE "%A%" or name LIKE "%a%" or name LIKE "%G%" or name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a) query:

```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

b) query:

```
INSERT INTO Movies (id, title, sinopse, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

c) query:

```
INSERT INTO Movies (id, title, sinopse, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

d) query:

```
INSERT INTO Movies (id, title, sinopse, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
```

e) query:

```
INSERT INTO Movies (id, title, sinopse, release_date, rating)
VALUES(
  "004",
  "Bacurau",
  "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade.",
  "2019-09-25",
  9
);
```

### Exercício 6

a) query:

```
SELECT id, title, rating FROM Movies WHERE id = "001";
```

b) query:

```
SELECT * FROM Movies Where title = "Bacurau";
```

c) query:

```
SELECT id, title, sinopse from Movies WHERE rating >=7;
```

### Exercício 7

a) query:

```
SELECT * FROM Movies WHERE title LIKE "%vida%";
```

b) query:

```
SELECT * FROM Movies WHERE title LIKE "%flor%" OR sinopse LIKE "%flor%";
```

c) query:

```
SELECT * FROM Movies WHERE release_date <= NOW();
```

d) query:

```
SELECT * FROM Movies WHERE release_date <= NOW() AND title LIKE "%flor%" OR sinopse LIKE "%flor%" AND rating > 7;
```
