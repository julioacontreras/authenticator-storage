import {sendToService} from './grpcClient'

const FindUserTest = (id: string) => {
  const request = {
    action: 'findUser',
    data: JSON.stringify({ id }),
    token: 'secret'
  }
  sendToService(request)
}

export {FindUserTest}