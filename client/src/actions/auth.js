import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

//LOGIN FORM
export const signin = (formData, router) => async dispatch => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

//REGISTRATION FORM
export const signup = (formData, router) => async dispatch => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

//AUTHORIZED USER
export const loggedIn = () => async dispatch => {
  const { data } = await api.loggedIn();
  if (data) {
    const user = data;
    dispatch({ type: AUTH, data: user });
  }
};

export const logOut = () => async dispatch => {
  await api.logOut();
  dispatch({ type: AUTH, data: null });
};
