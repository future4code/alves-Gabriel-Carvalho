import { IResultDB, Result } from "./../models/Result";
import { IAthleteDB } from "../models/Athlete";
import { ICompetitionDB } from "../models/Competition";
import { BaseDatabase } from "./BaseDatabase";

export class ResultDatabase extends BaseDatabase {
  public static TABLE_RESULT = "CASE_EV_RESULT";
  public static TABLE_COMPETITION = "CASE_EV_COMPETITION";
  public static TABLE_ATHLETE = "CASE_EV_ATHLETE";

  public toResultDBModel = (result: Result): IResultDB => {
    const resultDB: IResultDB = {
      id: result.getId(),
      value: result.getValue(),
      unit: result.getUnit(),
      competition_id: result.getCompetitionId(),
      athlete_id: result.getAthleteId(),
    };

    return resultDB;
  };

  public findCompetitionById = async (
    id: string
  ): Promise<ICompetitionDB | undefined> => {
    const result: ICompetitionDB[] = await BaseDatabase.connection(
      ResultDatabase.TABLE_COMPETITION
    )
      .select()
      .where({ id });
    return result[0];
  };

  public findAthleteById = async (
    id: string
  ): Promise<IAthleteDB | undefined> => {
    const result: IAthleteDB[] = await BaseDatabase.connection(
      ResultDatabase.TABLE_ATHLETE
    )
      .select()
      .where({ id });
    return result[0];
  };

  public createResult = async (result: Result): Promise<void> => {
    const resultDB = this.toResultDBModel(result);

    await BaseDatabase.connection(ResultDatabase.TABLE_RESULT).insert(resultDB);
    console.log(resultDB);
  };
}
