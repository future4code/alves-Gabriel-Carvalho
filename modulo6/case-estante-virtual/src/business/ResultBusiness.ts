import { IdGenerator } from "./../services/IdGenerator";
import { ResultDatabase } from "../database/ResultDatabase";
import { ICreateResultInputDTO, Result } from "../models/Result";
import { ParamsError } from "../errors/ParamsError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";

export class ResultBusiness {
  constructor(
    private resultDatabase: ResultDatabase,
    private idGenerator: IdGenerator
  ) {}

  public create = async (input: ICreateResultInputDTO) => {
    const { value, unit, competitionId, athleteId } = input;

    if (!value || !unit || !competitionId || !athleteId) {
      throw new ParamsError();
    }

    if (value < 0) {
      throw new ParamsError("O valor do resultado deve ser um número positivo");
    }

    const isCompetitionExists = await this.resultDatabase.findCompetitionById(
      competitionId
    );

    if (!isCompetitionExists) {
      throw new NotFoundError("Competição não encontrada");
    }

    const isAthleteExists = await this.resultDatabase.findAthleteById(
      athleteId
    );

    if (!isAthleteExists) {
      throw new NotFoundError("Atleta não encontrado");
    }
    const id = this.idGenerator.generate();

    const result = new Result(id, value, unit, competitionId, athleteId);

    await this.resultDatabase.createResult(result);

    const response = {
      message: "Resultado cadastrado com sucesso",
    };

    return response;
  };
}
