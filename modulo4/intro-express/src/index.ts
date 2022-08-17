import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type Users = {
  id: string;
  name: string;
  phone: string;
  email: string;
  website: string;
};

type Posts = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

const arrayUsers: Users[] = [
  {
    id: "1",
    name: "Gabriel",
    phone: "13131313",
    email: "gabriel@gmail.com",
    website: "gabriel.com",
  },
  {
    id: "2",
    name: "Isabela",
    phone: "06061313",
    email: "isabela@gmail.com",
    website: "isabela.com",
  },
];

const userPosts: Posts[] = [
  {
    id: "1",
    title: "Lorem ipsum",
    body: "lorem ipsum Lorem ipsum Lorem ipsum",
    userId: "1",
  },
  {
    id: "2",
    title: "Ipsum lorem",
    body: "ipsum Lorem ipsum Lorem ipsum lorem",
    userId: "1",
  },
  {
    id: "3",
    title: "Lorem",
    body: "lorem lorem lorem lorem lorem",
    userId: "2",
  },
  {
    id: "4",
    title: "Ipsum",
    body: "ipsum ipsum ipsum",
    userId: "2",
  },
];
// foi melhor fazer fora, pois os tipos de Users e Posts já estão definidos com foi pedido no enunciado do exercício

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express");
});

app.get("/users", (req: Request, res: Response) => {
  const users = arrayUsers.map((user) => {
    return user.name;
  });
  res.send(users);
});

app.get("/posts", (req: Request, res: Response) => {
  // const posts = userPosts.map((post) => {
  //   return post.body;
  // });
  res.send(userPosts);
});

app.get("/users/:userId/posts", (req: Request, res: Response) => {
  let newObj = {};
  const userId = req.params.userId;
  const posts = userPosts.map((post) => {
    if (post.userId === userId) {
      return (newObj = {
        id: post.id,
        title: post.title,
        body: post.body,
        userId: post.userId,
      });
    }
  });
  res.send(posts);
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
