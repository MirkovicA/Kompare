import React from 'react';
import { useSelector } from 'react-redux';

import UserItem from './UserItem';
import './UsersList.css';

const UserList = () => {
    const users = useSelector((state) => state.users);
    let content;
    if(!users.length) {
        content = <h2>Lista je prazna</h2>
        console.log("lista je prazana");
    } else {
        content = (
            <ul className="user-list">
                {users.map(user => (
                    <UserItem 
                        key={user._id}
                        id={user._id}
                        ime={user.ime}
                        prezime={user.prezime}
                        email={user.email}
                    />
                ))}
            </ul>
        );
    }

    return <section id="users">{content}</section>
};

export default UserList;