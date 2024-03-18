import { ChangeName, Login, Logout } from "../types"


type actiontype = {
      type : string,
      payload : any
}


const initialState = {
      isSignedIn : false,
      userName   : "Teddy",
}


export default (state = initialState, {type, payload} : actiontype ) => {
   
      switch(type) {
            case Login :
                  return {...state, isSignedIn : payload}

            case Logout :
                  return {...state, isSignedIn : payload}

            case ChangeName :
                  return {...state, isSignedIn : payload}
      }

      return state
}