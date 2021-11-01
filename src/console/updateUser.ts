import {sendToService} from './grpcClient'

const UpdateUserTest = (id: string) => {
  const request = {
    action: 'updateUser',
    data: JSON.stringify({ id, username: 'foo.bar' }),
    token: 'secret'
  }
  sendToService(request)
}

export {UpdateUserTest}