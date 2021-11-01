import {sendToService} from './grpcClient'

const FindUsersTest = () => {
  const request = {
    action: 'findUsers',
    data: JSON.stringify({}),
    token: 'secret'
  }
  sendToService(request)
}

export {FindUsersTest}