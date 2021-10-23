import {ProtocolServerAdapter} from '../adapters/interfaces/transport/server';
import {AuthAdapter} from '../adapters/interfaces/auth';
import {Action} from '../adapters/interfaces/transport/action';
import {SecurityAccess} from '../adapters/interfaces/securityAccess';
import {RepositoryAdapter} from '../adapters/interfaces/db/repository';

export class Application {
  private repository: RepositoryAdapter | null = null;
  private auth: AuthAdapter | null = null;
  private useCaseList: Map<string, Action> = new Map();
  private db: unknown | null = null;
  private securityAccess: SecurityAccess | null = null;

  connectDatabase(db: unknown) {
    this.db = db;
  }
  startServer(server: ProtocolServerAdapter, config: unknown) {
    server.create(this.useCaseList, config, this.securityAccess);
  }
  addUseCase(key: string, action: Action) {
    this.useCaseList.set(key, action);
  }
  setSecurityAccess(securityAccess: SecurityAccess) {
    this.securityAccess = securityAccess;
  }
  setRepository(repository: RepositoryAdapter) {
    this.repository = repository;
    this.repository.setDB(this.db);
  }
  getRepository(): RepositoryAdapter {
    return this.repository;
  }
  setAuth(auth: AuthAdapter) {
    this.auth = auth;
  }
  getAuth(): AuthAdapter {
    return this.auth;
  }
}
