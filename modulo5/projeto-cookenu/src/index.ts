import { app } from "./app";
import { UserEndpoint } from "./endpoint/User";
import { RecipeEndpoint } from "./endpoint/Recipe";

const userEndpoint = new UserEndpoint();
const recipeEndpoint = new RecipeEndpoint();

app.post("/signup", userEndpoint.create);
app.post("/login", userEndpoint.login);
app.get("/user/profile", userEndpoint.getProfile);
app.post("/user/follow", userEndpoint.follow);
app.post("/user/unfollow", userEndpoint.unfollow);
app.get("/user/feed", userEndpoint.feed);
app.delete("/user/delete/:id", userEndpoint.delete);
app.get("/user/:id", userEndpoint.getAnotherProfile);

app.post("/recipe", recipeEndpoint.create);
app.put("/recipe/edit/:id", recipeEndpoint.edit);
app.delete("/recipe/delete/:id", recipeEndpoint.delete);
app.get("/recipe/:id", recipeEndpoint.getRecipe);
