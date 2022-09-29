import { ILikeDB } from "./../models/Post";
import { ConflictError } from "./../errors/ConflictError";
import { NotFoundError } from "./../errors/NotFoundError";
import { ParamsError } from "./../errors/ParamsError";
import { AuthorizationError } from "./../errors/AuthorizationError";
import { PostDatabase } from "../database/PostDatabase";
import {
  ICreateInputDTO,
  IDeletePostInputDTO,
  IGetOutputDTO,
  ILikePostInputDTO,
  IPostLikeDB,
  Post,
} from "../models/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { USER_ROLES } from "../models/User";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public create = async (input: ICreateInputDTO) => {
    const { token, content } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    if (content.length < 1) {
      throw new ParamsError("O post deve conter mais de 1 caractere");
    }

    const id = this.idGenerator.generate();

    const post = new Post(id, content, payload.id);

    await this.postDatabase.createPost(post);

    const response = {
      message: "Post criado com sucesso",
      post,
    };
  };

  public getAllPosts = async (token: string) => {
    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postDB = await this.postDatabase.getPosts();

    const posts = postDB.map((post) => {
      return new Post(post.id, post.content, post.user_id);
    });

    for (const post of posts) {
      const postId = post.getId();
      const likes = await this.postDatabase.getLikes(postId);
      post.setLikes(likes);
    }

    const response: IGetOutputDTO = {
      posts,
    };

    const responseType: IPostLikeDB[] = response.posts.map((post) => {
      return this.postDatabase.postModelLike(post);
    });

    return responseType;
  };

  public delete = async (input: IDeletePostInputDTO) => {
    const { token, idPost } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postDB = await this.postDatabase.findPostById(idPost);

    if (!postDB) {
      throw new NotFoundError();
    }

    if (payload.role === USER_ROLES.NORMAL && postDB.user_id !== payload.id) {
      throw new AuthorizationError();
    }

    await this.postDatabase.deletePost(idPost);

    const response = {
      message: "Post deletado com sucesso",
    };
    return response;
  };

  public addLike = async (input: ILikePostInputDTO) => {
    const { token, idPost } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postDB = await this.postDatabase.findPostById(idPost);

    if (!postDB) {
      throw new NotFoundError();
    }

    const isLiked = await this.postDatabase.findLike(payload.id, idPost);

    if (isLiked) {
      throw new ConflictError();
    }

    const likeDB: ILikeDB = {
      id: this.idGenerator.generate(),
      post_id: idPost,
      user_id: payload.id,
    };

    await this.postDatabase.addLikeToPost(likeDB);

    const response = {
      message: "Like realizado com sucesso",
    };
    return response;
  };

  public removeLike = async (input: ILikePostInputDTO) => {
    const { token, idPost } = input;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const postDB = await this.postDatabase.findPostById(idPost);

    if (!postDB) {
      throw new NotFoundError();
    }

    const isLiked = await this.postDatabase.findLike(payload.id, idPost);

    if (!isLiked) {
      throw new ConflictError();
    }

    await this.postDatabase.removeLikeFromPost(payload.id, idPost);

    const response = {
      message: "Like removido com sucesso",
    };
    return response;
  };
}
