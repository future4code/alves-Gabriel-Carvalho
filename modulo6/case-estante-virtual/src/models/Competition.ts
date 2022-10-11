export interface ICompetitionDB {
  id: string;
  name: string;
  is_closed: boolean;
}

export class Competition {
  constructor(
    private id: string,
    private name: string,
    private isClosed: boolean = false
  ) {}

  public getId = () => {
    return this.id;
  };

  public getName = () => {
    return this.name;
  };

  public getIsClosed = () => {
    return this.isClosed;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setName = (newName: string) => {
    this.name = newName;
  };

  public setIsClosed = (newIsClosed: boolean) => {
    this.isClosed = newIsClosed;
  };
}
