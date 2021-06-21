import axios from 'axios';

const url = 'http://localhost:5000/api/users';

export const getUsers = () => axios.get(url);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);
export const addUser = (newUser) => axios.post(url, newUser);