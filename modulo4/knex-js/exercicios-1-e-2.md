### Exercício 1

a) quando usamos o raw, a resposta é um array de arrays, na primeira posição desse array pai, há os dados que queremos, e nas outras, há outras informações sobre o banco MySQL.

b)

```
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
```

c)

```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};
```

### Exercício 2

a)

```
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

b)

```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};
```

c)

```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```
