const { validationResult } = require('express-validator');

const User = require('../models/user');

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        return next(new Error('Neocekivana greska'));

    }
}

const addUser = async (req, res, next) => {
    const { ime, prezime, email } = req.body;
    console.log(`addUser: ime: ${ime}, prezime: ${prezime}, email: ${email}`);
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return next(new Error('Neispravan unos, provjerite upisane podatke'));
        } 
        const addedUser = new User({
            ime,
            prezime,
            email
        });
        await addedUser.save();
        res.status(201).json(addedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    
    let user;
    try {
        user = User.findById(userId);
        await user.remove();
        console.log(`uspjesno obrisan user: ${userId}`);
        res.status(200).send('Uspješno obrisano.');
    } catch (err) {
        res.status(500).send('Neuspjesno brisanje, pokusajte kasnije');
        return next(new Error('Neuspješno brisanje, pokušajte kasnije.'));
    }
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;