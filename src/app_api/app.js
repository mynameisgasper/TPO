require('dotenv').config();

//preverba okoljskih spremenljivk
const isProduction = (process.env.NODE_ENV === 'production');
const isDocker = (process.env.NODE_ENV === 'docker');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const passport = require('passport');
const logger = require('morgan');
const app = express();


/** povezava z podatkovno bazo in init za scheme, ki jih bomo uporabjali **/
require('./config/database');

/** konfiguracija passport.js za avtentikacijo uporabnikov **/
require('./config/passport');
app.use(passport.initialize());

const indexApi = require('./routes/index');
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use('/api/v1', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT, GET');
    next();
});
/** TODO
 * implementiraj:
 * routes
 * controllers
 * models
 */
// app.use('/api/v1', indexApi);


/** ce se ne ujema z url-jem za API, ga bo preusmerilo na Angular frontend **/
/** todo **/
// const distFolder = isProduction?:'build';
// app.use("/*",function(req,res){
//     res.sendFile(path.join(__dirname,'app_public',distFolder,'index.html'));
// });


// Obvladovanje napak zaradi avtentikacije
app.use((err, req, res, next) => {
    if (err.name == "UnauthorizedError") {
        res.status(401).json({"sporocilo": err.name + ": " + err.message});
    }
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
// 404 ?
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;
