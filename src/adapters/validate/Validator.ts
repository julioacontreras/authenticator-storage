export interface Validator {
    isEmail: (email: string) => boolean 
    isString: (value: string) => boolean
    has: (data: any, key: string) => boolean
  }