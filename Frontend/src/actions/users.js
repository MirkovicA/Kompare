import * as actions from '../const/actionTypes';

import * as api from '../api/index';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch({ type: actions.GET_ALL, payload: data });
    } catch (error) {
        alert(error.message);
    }
};

export const deleteUser = (id) => async(dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({ type: actions.DELETE, payload: id });
    } catch (error) {
        alert(error.message);
    }
};

export const addUser = (ime, prezime, email) => async (dispatch) => {
    const newUser = {
        ime,
        prezime,
        email
    };
    try {
        const { data } = await api.addUser(newUser);
 
        dispatch({ type: actions.CREATE, payload: data });
    } catch (error) {
        alert(error.response.data);
    }
};