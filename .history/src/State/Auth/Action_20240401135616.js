import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT
} from './ActionTypes';
import { API_BASE_URL } from '../../Config/apiConfig';

const token=localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });



export const register = userData => async dispatch => {
    dispatch(registerRequest());
    try {
      const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
      const user = response.data;
      if(user.jwt) {
        localStorage.setItem("jwt",user.jwt)
      }
      //console.log("register :",user)
      dispatch(registerSuccess(user));
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  }


const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
      const user = response.data;
      if(user.jwt) localStorage.setItem("jwt",user.jwt)
      console.log("login ",user)
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = user => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = error => ({ type: GET_USER_FAILURE, payload: error });


  export const getUser = (token) => {
    //
    //return 
    async (dispatch) => {
      dispatch(getUserRequest());
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,
        { headers:{
            "Authorization":`Bearer ${token}`}}
        );
        const user = response.data;
        dispatch(getUserSuccess(user));
        console.log("req User ",user)
      } catch (error) {
        dispatch(getUserFailure(error.message));
      }
    };
  };

  export const logout = () => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      //localStorage.clear();
    };
  };