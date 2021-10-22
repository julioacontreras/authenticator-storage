import {UserInterface} from '../model/interface';
import {Transformer} from '../../shared/transformer';

export interface ApiUserInterface {
  _id: String;
  username: String;
  profile: String;
  password: String;
  createAt: String;
  updatedAt: String;
}

const parseData = (dataApi: ApiUserInterface) => {
  return {
    id: dataApi._id,
    username: dataApi.username,
    profile: dataApi.profile,
    password: dataApi.password,
    createAt: dataApi.createAt,
    updatedAt: dataApi.updatedAt,
  } as UserInterface;
};

const parseAPI = (dataApi: UserInterface) => {
  return {
    _id: dataApi.id,
    username: dataApi.username,
    profile: dataApi.profile,
    password: dataApi.password,
    createAt: dataApi.createAt,
    updatedAt: dataApi.updatedAt,
  } as ApiUserInterface;
};

export const userTransformer = {
  transformToData(listData: Array<ApiUserInterface>): Array<UserInterface> {
    const resultList: Array<UserInterface> = [];
    listData.forEach(dataApi => {
      resultList.push(parseData(dataApi));
    });
    return resultList;
  },
  transformToAPI(listAPI: Array<UserInterface>): Array<ApiUserInterface> {
    const resultList: Array<ApiUserInterface> = [];
    listAPI.forEach(data => {
      resultList.push(parseAPI(data));
    });
    return resultList;
  },
} as Transformer;
