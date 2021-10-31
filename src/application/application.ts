import {ProtocolServerAdapter} from '../adapters/interfaces/transport/server';
import {Action} from '../adapters/interfaces/transport/action';
import {SecurityAccess} from '../adapters/interfaces/securityAccess';
import {RepositoryAdapter} from '../adapters/interfaces/db/repository';
import {Validator} from 'src/adapters/interfaces/validator';
import {Metric} from 'src/adapters/interfaces/metrics/metric';

export class Application {
  private useCaseList: Map<string, Action> = new Map();
  private securityAccess: SecurityAccess | null = null;
  private validator: Validator | null = null;
  private userRepository: RepositoryAdapter | null = null;
  private database: any | null = null;
  private server: ProtocolServerAdapter | null = null;
  private metric: Metric | null = null;
  public Repository: any;
  setMetric(metric: Metric) {
    this.metric = metric
  }
  getMetric(): Metric {
    return this.metric
  }
  setDatabase(database: any) {
    this.database = database
  }
  getDatabase(){
    return this.database
  }
  startServer(serverInstance: ProtocolServerAdapter, config: unknown) {
    this.server = serverInstance
    this.server.create(this.useCaseList, config, this.securityAccess, this);
  }
  getServer(): ProtocolServerAdapter{
    return this.server
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
