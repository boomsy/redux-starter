import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import counterReducer from "./reducers/counterReducer";

/* ------------ Redux persist ---------------------*/
import storage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";

/* ------------ Redux thunk ---------------------*/
import { thunk } from "redux-thunk";


const persistUserConfig = {
      key : "user",
      storage
}

const persistCounterConfig = {
      key : "counter",
      storage
}




const rootReducer = combineReducers({
      userData     : persistReducer( persistUserConfig, userReducer),
      counterData  : persistReducer( persistCounterConfig, counterReducer),
})



/*
const rootReducer = combineReducers({
      userData     : userReducer,
      counterData  : counterReducer,
})
*/


// export const store      = createStore(rootReducer)

export const store      = createStore( rootReducer, applyMiddleware(thunk) )
export type  RootState  = ReturnType<typeof rootReducer>

export const persitor   = persistStore(store) ;

