import {sendToService} from './grpcClient'

const DeleteUserTest = (id: string) => {
  const request = {
    action: 'deleteUser',
    data: JSON.stringify({ id }),
    token: 'secret'
  }
  sendToService(request)
}

export {DeleteUserTest}