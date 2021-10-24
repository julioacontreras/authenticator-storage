import {Mongoose} from 'mongoose';
import {RepositoryAdapter} from '../../adapters/interfaces/db/repository';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let MongoModel: any | null = null;

export class MongoRepository implements RepositoryAdapter {
  transformer: unknown;
  private db: Mongoose | null = null;
  constructor(repository: string, schema: any, db: Mongoose){
    this.setDB(db);
    this.createRepository(repository, schema);
  }
  setDB(db: Mongoose) {
    this.db = db;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createRepository(repository: string, schema: any) {
    MongoModel = this.db.model(repository, new this.db.Schema(schema));
    if (!MongoModel) {
      throw 'Not exist repository';
    }
    return MongoModel;
  }
  async createOne(data: unknown): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (!MongoModel) {
        reject('Not exist repository');
      }
      const doc = new MongoModel(data);
      resolve(doc.save());
    });
  }
  async updateOne(id: string, data: unknown): Promise<unknown> {
    if (!MongoModel) {
      throw 'Not exist repository';
    }
    return await MongoModel.updateOne({_id: id}, data);
  }
  async deleteOne(id: string): Promise<unknown> {
    if (!MongoModel) {
      throw 'Not exist repository';
    }
    return await MongoModel.deleteOne({_id: id});
  }
  async findOne(id: string): Promise<unknown> {
    if (!MongoModel) {
      throw 'Not exist repository';
    }
    return await MongoModel.findOne({_id: id});
  }
  async find(selector: unknown): Promise<unknown> {
    if (!MongoModel) {
      throw 'Not exist repository';
    }
    return await MongoModel.find(selector);
  }
}
