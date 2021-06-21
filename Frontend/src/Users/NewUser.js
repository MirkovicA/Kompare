import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../UIElements/Input/Input';
import Button from '../UIElements/Button/Button';
import { addUser } from '../actions/users';
import validateForm from '../validators/validators';
import './NewUser.css';

const NewUser = props => {
    const dispatch = useDispatch();
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [email, setEmail] = useState('');

    const clear = () => {
        setIme('');
        setPrezime('');
        setEmail('');
    }

    const imeChange = event => {
        setIme(event.target.value);
    };

    const prezimeChange = event => {
        setPrezime(event.target.value);
    };

    const emailChange = event => {
        setEmail(event.target.value);
    };

    const submitUser = event => {
        event.preventDefault();
        dispatch(addUser(ime, prezime, email));
        
        clear();
    };
    
    const content = 
        <section id="new-user">
            <div><h2>Unos novog korisnika</h2>
                <form onSubmit={submitUser}>
                    <Input 
                        type="text"
                        label="Ime"
                        id="ime"
                        value={ime}
                        onChange={imeChange}
                    />
                    <Input 
                        type="text"
                        label="Prezime"
                        id="prezime"
                        value={prezime}
                        onChange={prezimeChange}
                    />
                    <Input 
                        type="text"
                        label="Email"
                        id="email"
                        value={email}
                        onChange={emailChange}
                    />
                    <div className="center" ><Button type="submit" inverse disabled={!validateForm(ime, prezime, email)}>Spremi</Button></div>
                </form>
            </div>
        </section>;

    return content;
};

export default NewUser;