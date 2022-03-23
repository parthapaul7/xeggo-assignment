import { createStore,combineReducers } from "redux";
import { todos , logInStatus} from "./redux/reducer";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const reducers ={todos ,logInStatus}
const persistConfig={
    key :"root",
    storage,
    stateReconsiler: autoMergeLevel2

}
const rootReducer = combineReducers(reducers)
const persistedRudecer = persistReducer(persistConfig,rootReducer)

export const configureStore =()=> createStore(persistedRudecer)