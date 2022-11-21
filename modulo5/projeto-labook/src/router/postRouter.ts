import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../database/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const postRouter = Router();

const postController = new PostController(
  new PostBusiness(new PostDatabase(), new IdGenerator(), new Authenticator())
);

postRouter.post("/create", postController.create);
postRouter.get("/getall", postController.getAllPosts);
postRouter.post("/like/:id", postController.addLike);
postRouter.delete("/unlike/:id", postController.removeLike);
postRouter.delete("/:id", postController.delete);