import { BaseError } from "./BaseError";

export class InvalidCredentials extends BaseError {
  constructor() {
    super("Invalid credentials", 401);
  }
}
