import dotenv from "dotenv";
import * as bcrypt from "bcryptjs";

dotenv.config();

export class HashManager {
  async hash(password: string): Promise<string> {
    const cost = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(cost);
    const cypherText = await bcrypt.hash(password, salt);

    return cypherText;
  }

  async compare(plaintext: string, hash: string): Promise<boolean> {
    const hashCompare: boolean = await bcrypt.compare(plaintext, hash);
    return hashCompare;
  }
}
