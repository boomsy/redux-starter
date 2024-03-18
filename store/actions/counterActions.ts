import axios from "axios"
import { Decrement, GetUserDocs, Increment } from "../types"
import { Dispatch } from "redux"

export const incrementAction = () => {
      return {
            type    : Increment ,
      }
}


export const decrementAction = () => {
      return {
            type    : Decrement ,
      }
}


export const getUsersBooks = () => {

      return async (dispatch : Dispatch) => {  

            try {

                  const {data} = await axios.get(
                        "https://649ea51c245f077f3e9cb5bc.mockapi.io/books",
                  );

                  dispatch({
                        type : GetUserDocs,
                        payload: data
                  })


            } catch(error) {
                  console.log(error)
            }

      } 

}