//import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';



const initialState = {
  users: [],
  loading: false,
  error: null,
}


const loadingStart = ( state, action ) => {
    return updateObject( state, { loading: true, error: null } );
  };
  
  
  
  const  fetcSucess = ( state, action ) => {
    console.log("ÇALIş")

    return updateObject( state, {  
        users: [
            ...state.users,         
            ...action.data  
        ],     
        loading: false,
        error: null,
    } );
  };


  const failError = ( state, action ) => {
    return updateObject( state, { loading: false, error: action.error } );
  };

  const resetUsers = ( state, action ) => {
    return updateObject( state, { users: [], loading: false, error: false } );
  };
  




  

const userReducer = (state = initialState, action) => {
 switch(action.type) {  
    case actionTypes.FETCH_START: return loadingStart( state, action );
    case actionTypes.FETCH_SUCSESS: return fetcSucess( state, action );
    case actionTypes.FETCH_FAIL: return failError( state, action );  
    case actionTypes.RESET_USERS: return resetUsers( state, action );  
    default:
    return state;
 }
}
const persistConfig = {
    key: "userReducer",
   storage: AsyncStorage,
    blacklist: ['users', 'error', 'loading'],  
}



export default persistReducer(persistConfig, userReducer);