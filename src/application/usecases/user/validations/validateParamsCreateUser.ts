import { MicroServiceError } from "akuma-microservice-framework/lib/adapters/action-protocol/exception/microServiceError";
import { Validator } from "../../../../adapters/validate/Validator";
import {CreateUserParams} from '../../../../domain/user/services/createUserInterface';

export class ValidateParamsCreateUser {
  private validator
  constructor (validator: Validator) {
    this.validator = validator
  }
  validate(data: CreateUserParams) {
    if (!this.validator.isEmail(data.email)) {
      throw new MicroServiceError('Invalid field email', 'validation-error')
    }
    if (!this.validator.isString(data.password)) {
      throw new MicroServiceError('Invalid field password', 'validation-error')
    }
    if (!this.validator.isString(data.profile)) {
      throw new MicroServiceError('Invalid field profile', 'validation-error')
    }
    if (!this.validator.isString(data.username)) {
      throw new MicroServiceError('Invalid field username', 'validation-error')
    }
  }
}
