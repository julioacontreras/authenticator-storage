import joi from 'joi';

export class Validator {
  private validator = joi 
  isEmail (email: string): boolean {
    if (!email) {
      return false;
    }
    const schema = this.validator.string().email();
    const result = schema.validate(email)
    return result.error ? false : true 
  }
  isString (value: string): boolean {
    const schema = this.validator.string();
    const result = schema.validate(value)
    return result.error ? false : true 
  }
  has (data: any, key: string): boolean {
    return data[key]
  }
} 