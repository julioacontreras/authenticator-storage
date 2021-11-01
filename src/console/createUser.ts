import {sendToService} from './grpcClient'
const faker = require('faker');

const CreateUserTest = (repeat: number) => {
  for(let i=0; i<repeat; i++) {
    const request = {
      action: 'createUser',
      data: JSON.stringify({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        salt: faker.internet.password(),
        profile: 'user'
      }),
      token: 'secret'
    }
    sendToService(request)
  }
}

export {CreateUserTest}