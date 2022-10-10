import { ILikeDB } from "./../models/Post";
import { likes } from "./migrations/data";
import { IPostDB, IPostLikeDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";
  private postModelDB = (post: Post): IPostDB => {
    const postDB: IPostDB = {
      id: post.getId(),
      content: post.getContent(),
      user_id: post.getUserId(),
    };
    return postDB;
  };

  public postModelLike = (post: Post) => {
    const postLikeDB: IPostLikeDB = {
      id: post.getId(),
      content: post.getContent(),
      userId: post.getUserId(),
      like: post.getLikes(),
    };
    return postLikeDB;
  };
  public createPost = async (post: Post) => {
    const postDB = this.postModelDB(post);
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postDB);
  };

  public getPosts = async () => {
    const result: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    ).select("*");

    return result;
  };

  public getLikes = async (postId: string) => {
    const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .select()
      .count("id AS likes")
      .where({ post_id: postId });
    return result[0].likes as number;
  };

  public findPostById = async (id: string) => {
    const result: IPostDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_POSTS
    )
      .select("*")
      .where({ id });
    return result[0];
  };

  public deletePost = async (id: string) => {
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
      .delete()
      .where({ id });
  };

  public findLike = async (idUser: string, idPost: string) => {
    const result: ILikeDB[] = await BaseDatabase.connection(
      PostDatabase.TABLE_LIKES
    )
      .select()
      .where({ post_id: idPost })
      .andWhere({ user_id: idUser });

    return result[0];
  };

  public addLikeToPost = async (input: ILikeDB) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES).insert(input);
  };

  public removeLikeFromPost = async (idUser: string, idPost: string) => {
    await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
      .delete()
      .where({ post_id: idPost })
      .andWhere({ user_id: idUser });
  };
}
