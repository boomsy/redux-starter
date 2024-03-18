import { Decrement, GetUserDocs, Increment } from "../types"


const initialState = {
      count      : 0,
      books      : []
}


export default (state = initialState, {type, payload}) => {

      switch(type) {

            case Increment :
                  return {...state, count : state.count + 1}

            case Decrement :
                  return {...state, count : state.count - 1}

            case GetUserDocs :
                  return {...state, books: payload}      
      }

      return state
}