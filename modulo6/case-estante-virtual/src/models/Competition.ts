export class Competition {
  constructor(
    private id: string,
    private name: string,
    private status: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getStatus = () => {
    return this.status;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setStatus = (newStatus: string) => {
    this.status = newStatus;
  };
}
