const mongoose = require('mongoose');


/** nastavimo si spremenljivke **/
let isProduction = (process.env.NODE_ENV === 'production');
let isDocker = (process.env.NODE_ENV === 'docker');

let dbURI = isProduction?process.env.MONGODB_CLOUD_URI:(isDocker?process.env.MONGODB_DOCKER_URI:'mongodb://localhost:27017/dogwalkers-cluster');
if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'docker'){
    console.log('NodeJs APP is running in PRODUCTION MODE')
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
    console.log('NodeJs APP is running in DEVELOPMENT MODE')
    mongoose.connect(dbUri, {
        dbName: 'gume1a-dev-cluster',
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose je povezan na ${dbURI}.`);
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
