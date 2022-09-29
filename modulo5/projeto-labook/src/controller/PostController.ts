import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import {
  ICreateInputDTO,
  IDeletePostInputDTO,
  ILikePostInputDTO,
} from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public create = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const content = req.body.content;
      const input: ICreateInputDTO = {
        token,
        content,
      };

      const response = await this.postBusiness.create(input);
      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public getAllPosts = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const response = await this.postBusiness.getAllPosts(token);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const idPost = req.params.id;

      const input: IDeletePostInputDTO = {
        token,
        idPost,
      };

      const response = await this.postBusiness.delete(input);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
  public addLike = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const idPost = req.params.id;

      const input: ILikePostInputDTO = {
        token,
        idPost,
      };

      const response = await this.postBusiness.addLike(input);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
  public removeLike = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const idPost = req.params.id;

      const input: ILikePostInputDTO = {
        token,
        idPost,
      };

      const response = await this.postBusiness.removeLike(input);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
