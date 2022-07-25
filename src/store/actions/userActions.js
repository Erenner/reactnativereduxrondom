import * as actionTypes from './actionTypes';
import axiosget from '../../../axiosget';

const startFetch = () => {
    return {
        type: actionTypes.FETCH_START
    }
}

export const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
         error: error,
    }
};


export const fetchSucsess = (data) => {
    console.log("Sen")
    return {
     type: actionTypes.FETCH_SUCSESS,
      data: data
    }
};

export const resetUsers = () => {
  
    return {
     type: actionTypes.RESET_USERS, 
    }
};





export const fetchItems = () => {    
    return dispatch => {      
        dispatch(startFetch());
        axiosget.get("api/?results=20").then(response => {  
     dispatch(fetchSucsess(response.data.results))
       }).catch(err => {       
        dispatch(fetchFail(err.message))
    })       
      } 
};


