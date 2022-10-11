import { IdGenerator } from "./../services/IdGenerator";
import { CompetitionDatabase } from "./../database/CompetitionDatabase";
import { Competition } from "../models/Competition";
import { ParamsError } from "../errors/ParamsError";
import { ConflictError } from "../errors/ConflictError";

export class CompetitionBusiness {
  constructor(
    private competitionDatabase: CompetitionDatabase,
    private idGenerator: IdGenerator
  ) {}

  public create = async (name: string) => {
    if (!name) {
      throw new ParamsError();
    }

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string");
    }

    const isCompetitionAlreadyExists =
      await this.competitionDatabase.findByName(name);

    if (isCompetitionAlreadyExists) {
      throw new ConflictError("Competição já cadastrada");
    }
    const id = this.idGenerator.generate();

    const competition = new Competition(id, name);

    await this.competitionDatabase.createCompetition(competition);

    const response = {
      message: "Competição criada com sucesso",
    };

    return response;
  };
}
