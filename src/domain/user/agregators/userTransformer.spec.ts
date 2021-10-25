import {userTransformer} from './userTransformer'
import {ApiUserInterface} from '../agregators/userTransformer'
const faker = require('faker');

describe('Validate points', () => {
  test('Validate points', () => {
    const data = [
      {
        id: faker.datatype.uuid(),
        username: faker.name.firstName(),
        profile: 'admin',
        password: faker.datatype.string(),
        createAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: faker.datatype.uuid(),
        username: faker.name.firstName(),
        profile: 'admin',
        password: faker.datatype.string(),
        createAt: Date.now(),
        updatedAt: Date.now(),
      },
    ]
    const result = userTransformer.transformToAPI(data)
    const item = result[0] as ApiUserInterface;
    expect(item._id).toBeDefined();
    expect(item.username).toBeDefined();
    expect(item.profile).toBeDefined();
    expect(item.password).toBeDefined();
    expect(item.createAt).toBeDefined();
    expect(item.updatedAt).toBeDefined();
  });
});
