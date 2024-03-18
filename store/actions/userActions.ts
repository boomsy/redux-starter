import { ChangeName, Login, Logout } from "../types"


export const loginAction = () => {
      return {
            type    : Login ,
            payload : true
      }
}


export const logoutAction = () => {
      return {
            type    : Logout ,
            payload : false
      }
}


export const changeNameAction = (userName: string) => {
      return {
            type    : ChangeName ,
            payload : userName
      }
}