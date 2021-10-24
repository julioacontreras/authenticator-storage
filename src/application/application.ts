import {ProtocolServerAdapter} from '../adapters/interfaces/transport/server';
import {Action} from '../adapters/interfaces/transport/action';
import {SecurityAccess} from '../adapters/interfaces/securityAccess';
import {RepositoryAdapter} from '../adapters/interfaces/db/repository';
import { Validator } from 'src/adapters/interfaces/validator';

export class Application {
  private useCaseList: Map<string, Action> = new Map();
  private securityAccess: SecurityAccess | null = null;
  private validator: Validator | null = null;
  private userRepository: RepositoryAdapter | null = null;
  private database: any | null = null;
  
  setDatabase(database: any) {
    this.database = database
  }
  getDatabase(){
    return this.database
  }
  startServer(server: ProtocolServerAdapter, config: unknown) {
    server.create(this.useCaseList, config, this.securityAccess);
  }
  addUseCase(key: string, action: Action) {
    this.useCaseList.set(key, action);
  }
  setValidator(validator: Validator) {
    this.validator = validator;
  }
  getValidator(): Validator {
    return this.validator;
  }
  setSecurityAccess(securityAccess: SecurityAccess) {
    this.securityAccess = securityAccess;
  }
  setUserRepository(userRepository: any) {
    this.userRepository = userRepository
  }
  getUserRepository(): any {
    return this.userRepository
  }
}
