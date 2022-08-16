type Users = {
  name: string;
  email: string;
  role: string;
};

const arrayUsuarios: Users[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

export function retornaUsers(arrayUsuarios: Users[]) {
  let newArray = arrayUsuarios.filter((user) => {
    return user.role === "admin";
  });
  return newArray.map((user) => {
    return user.email;
  });
}
