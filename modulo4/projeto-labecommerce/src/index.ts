import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import { getUsers } from "./endpoints/getUsers";
import { createProducts } from "./endpoints/createProducts";
import { getProducts } from "./endpoints/getProducts";
import { createPurchase } from "./endpoints/createPurchase";
import { getPurchase } from "./endpoints/getPurchase";

app.post("/users", createUsers);
app.get("/users", getUsers);
app.post("/products", createProducts);
app.get("/products", getProducts);
app.post("/purchases", createPurchase);
app.get("/users/:user_id/purchases", getPurchase);
