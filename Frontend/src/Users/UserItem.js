import React from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { deleteUser } from '../actions/users';

import './UserItem.css';

const UserItem = props => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <li className="user-item">
            <div className="left"><p>{props.ime} {props.prezime} {props.email}</p></div>
            <div className="right">
                <CloseIcon fontSize="small" color="secondary" onClick={() => dispatch(deleteUser(props.id))}/>
            </div>
        </li>
        </React.Fragment>
    )
};

export default UserItem;