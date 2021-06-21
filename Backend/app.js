const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbData = require('./const/dbConnectData');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, PATCH, OPTIONS');

    next();
});

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    throw new Error('Ne postojeci endpoint');
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({ message: error.message || 'Dogodila se ne ocekivana greska' });
});

mongoose
    .connect(`mongodb+srv://${dbData.dbUsername}:${dbData.dbPassword}@cluster0.wjofa.mongodb.net/${dbData.dbName}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    })