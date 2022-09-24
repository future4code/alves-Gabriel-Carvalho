import { FeedDB, UserDB } from "./../model/User";
import BaseDataBase from "./BaseDataBase";
import { User } from "../model/User";
import moment from "moment";

export class UserData extends BaseDataBase {
  private static tableName = "user_cookenu";

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.getConnection()
      .select("*")
      .from(UserData.tableName)
      .where({ email });

    if (!result.length) {
      return undefined;
    }

    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role
    );
  }

  public async getUserById(id: string): Promise<UserDB> {
    const result = await this.getConnection()
      .select("*")
      .from(UserData.tableName)
      .where({ id });

    const user: UserDB = {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
    };
    return user;
  }

  async createUser(user: User): Promise<string> {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole().toUpperCase(),
      })
      .into(UserData.tableName);

    return `User signed up with success`;
  }

  async postFollow(idFollow: string, idFollowed: string): Promise<string> {
    await this.getConnection()
      .insert({
        id_follow: idFollow,
        id_followed: idFollowed,
      })
      .into("followers_cookenu");

    return `Followed successfully`;
  }

  async deleteFollow(idFollow: string, idFollowed: string): Promise<string> {
    await this.getConnection()
      .delete()
      .from("followers_cookenu")
      .where({ id_follow: idFollow })
      .andWhere({ id_followed: idFollowed });

    return `Unfollowed successfully`;
  }

  async getFeed(id: string): Promise<FeedDB[]> {
    const result = await this.getConnection()
      .select("recipe_cookenu.*", "user_cookenu.name")
      .from("followers_cookenu")
      .innerJoin(
        "user_cookenu",
        "followers_cookenu.id_followed",
        "user_cookenu.id"
      )
      .innerJoin(
        "recipe_cookenu",
        "followers_cookenu.id_followed",
        "recipe_cookenu.user_id"
      )
      .where({
        "followers_cookenu.id_follow": `${id}`,
      });

    const typeFeed = result.map((feed: any) => {
      const type: FeedDB = {
        id: feed.id,
        title: feed.title,
        description: feed.description,
        createdAt: moment(feed.creation_date, "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        ),
        userId: feed.user_id,
        userName: feed.name,
      };
      return type;
    });
    return typeFeed;
  }

  async deleteFollowIn(idFollow: string): Promise<void> {
    await this.getConnection()
      .delete()
      .from("followers_cookenu")
      .where({ id_follow: idFollow });
  }

  async deleteFollowOut(idFollowed: string): Promise<void> {
    await this.getConnection()
      .delete()
      .from("followers_cookenu")
      .where({ id_followed: idFollowed });
  }

  async deleteUser(id: string): Promise<void> {
    await this.getConnection().delete().from(UserData.tableName).where({ id });
  }
}
