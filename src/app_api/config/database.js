const mongoose = require('mongoose');

/** nastavimo si spremenljivke **/
let isProduction = (process.env.NODE_ENV === 'production');
let isDocker = (process.env.NODE_ENV === 'docker');

let dbUri = (isProduction)?
    process.env.MONGO_ATLAS_URI:
    (isDocker)?
    `mongodb://${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}`:
    'mongodb://localhost:27017';
if(process.env.NODE_ENV === 'production'){
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}else if(process.env.NODE_ENV === 'docker'){
    mongoose.connect(dbUri, {
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASS,
        dbName: process.env.MONGODB_DB,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}else{
    mongoose.connect(dbUri, {
        dbName: 'dw-dev-cluster',
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

mongoose.connection.on('connected', () => {
    console.log(`Mongoose je povezan na ${dbUri}.`);
});
mongoose.connection.on('error', napaka => {
    console.log('Mongoose napaka pri povezavi: ', napaka);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose ni povezan.');
});

const pravilnaUstavitev = (sporocilo, povratniKlic) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose je zaprl povezavo preko '${sporocilo}'.`);
        povratniKlic();
    });
};

// Ponovni zagon nodemon
process.once('SIGUSR2', () => {
    pravilnaUstavitev('nodemon ponovni zagon', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Izhod iz aplikacije
process.on('SIGINT', () => {
    pravilnaUstavitev('izhod iz aplikacije', () => {
        process.exit(0);
    });
});

// Izhod iz aplikacije na Heroku
process.on('SIGTERM', () => {
    pravilnaUstavitev('izhod iz aplikacije na Heroku', () => {
        process.exit(0);
    });
});

require('../models/schemas')
