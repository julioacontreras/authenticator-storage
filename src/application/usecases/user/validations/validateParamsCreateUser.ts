import { Validator } from "src/adapters/interfaces/validator";
import {CreateUserParams} from '../../../../domain/user/services/createUser';

export class ValidateParamsCreateUser {
  private validator
  constructor (validator: Validator) {
    this.validator = validator
  }
  validate(data: CreateUserParams) {
    if (!this.validator.isEmail(data.email)) {
      throw 'Invalid field email'
    }
    if (!this.validator.isString(data.password)) {
      throw 'Invalid field password'
    }
    if (!this.validator.isString(data.profile)) {
      throw 'Invalid field profile'
    }
    if (!this.validator.isString(data.username)) {
      throw 'Invalid field username'
    }
  }
}
