import moment from "moment";
export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private creationDate: Date,
    private userId: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }

  public getUserId(): string {
    return this.userId;
  }

  public setDate(date: any) {
    this.creationDate = date;
  }
}
