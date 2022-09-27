import { IUsers, users } from "./exercicios/chefIfContainAstrodev";

describe("Praticando com Jest", () => {
  test("O usuário 'Astrodev' deve existir na lista", () => {
    const user: IUsers = {
      name: "Astrodev",
    };
    const result = users.map((user) => {
      return user.name;
    });

    expect(result).toContainEqual(user.name);
  });
});
