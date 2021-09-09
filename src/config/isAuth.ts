import { Data } from './data'

const isAuth = (): boolean => {
  let auth = false

  const userTemp = localStorage.getItem('userInfo')

  if (typeof userTemp === 'string') {
    const user = JSON.parse(userTemp)
    Data.map((x) => {
      if (x.id === user.id) {
        auth = true
      }
    })
  }

  return auth
}

export default isAuth
