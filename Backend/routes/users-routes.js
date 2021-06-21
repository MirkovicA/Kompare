const express = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users-controller');


const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/',
    [
        check('ime').notEmpty(),
        check('prezime').notEmpty(),
        check('email').isEmail()
    ],
    usersController.addUser
);

router.delete('/:userId',usersController.deleteUser);
    

module.exports = router;