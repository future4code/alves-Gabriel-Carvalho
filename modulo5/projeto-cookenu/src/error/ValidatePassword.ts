import { BaseError } from "./BaseError";

export class ValidatePassword extends BaseError {
  constructor() {
    super("Password must be at least 6 characters", 400);
  }
}
