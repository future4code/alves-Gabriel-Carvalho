import { BaseError } from "./BaseError";

export class MissingToken extends BaseError {
  constructor() {
    super("Missing token", 400);
  }
}
