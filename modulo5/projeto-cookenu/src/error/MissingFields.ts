import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
  constructor() {
    super("Missing parameters", 400);
  }
}
