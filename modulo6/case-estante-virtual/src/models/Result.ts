export interface IResultDB {
  id: string;
  value: number;
  unit: string;
  competition_id: string;
  athlete_id: string;
}

export class Result {
  constructor(
    private id: string,
    private value: number,
    private unit: string,
    private competitionId: string,
    private athleteId: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getValue = () => {
    return this.value;
  };

  public getUnit = () => {
    return this.unit;
  };

  public getCompetitionId = () => {
    return this.competitionId;
  };

  public getAthleteId = () => {
    return this.athleteId;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setValue = (newValue: number) => {
    this.value = newValue;
  };

  public setUnit = (newUnit: string) => {
    this.unit = newUnit;
  };

  public setCompetitionId = (newCompetitionId: string) => {
    this.competitionId = newCompetitionId;
  };

  public setAthleteId = (newAthleteId: string) => {
    this.athleteId = newAthleteId;
  };
}

export interface ICreateResultInputDTO {
  value: number;
  unit: string;
  competitionId: string;
  athleteId: string;
}
