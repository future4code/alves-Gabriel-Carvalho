export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ) {}
  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): USER_ROLES {
    return this.role;
  }
}

export interface UserDB {
  id: string;
  name: string;
  email: string;
}

export interface FeedDB {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  userId: string;
  userName: string;
}
