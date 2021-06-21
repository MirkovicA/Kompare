import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UserList from './Users/UsersList';
import NewUser from './Users/NewUser'
import { getUsers } from './actions/users';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <React.Fragment>
      <NewUser />
      <UserList/>
    </React.Fragment>
    
  );
}

export default App;
