/* Appel de tous nos outils */
const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const flash = require('connect-flash');
const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const session = require('express-session');
const chartist = require('chartist');
const $ = require('jquery');

// Get all models
const Entreprise = require('./models/entreprise');
const Fiche = require('./models/fiche');
const Vehicle = require('./models/vehicule');
const Trajet = require('./models/trajet');
const User = require('./models/user');


/* ROUTES */
var usercontroller = require('./controllers/usercontroller');
var vehiculescontroller = require('./controllers/vehiculescontroller');
var trajetcontroller = require('./controllers/trajetcontroller');
var entreprisecontroller = require('./controllers/entreprisecontroller');
var fichecontroller = require('./controllers/fichescontroller');
var authcontroller = require('./controllers/authcontroller');


// Middleware
const isAuth = require('./middleware/auth');


/* Ajout de express-ejs-layouts */
const ejsLayout = require('express-ejs-layouts');

/* Initialisation des variables */
const router = {
    isStarted: false
};

function start(callback) {
    if (router.isStarted === false) {
        init(function () {
            loadRoutes(function () {
                /* Lance le serveur web sur le port 3000 */
                http.listen(3000, function () {
                    console.log('Application is running on port 3000');
                    router.isStarted = true;
                    if (typeof callback != 'undefined') {
                        callback();
                    }
                });
            });
        });
    } else {
        console.log("Application already started");
        if (typeof callback != 'undefined') {
            callback();
        }
    }
}

function init(callback) {
    /* On s'assure que le serveur n'est vraiment pas démarré */
    router.isStarted = false;

    /** middleware setup */
    expressApp.use(
        session({
            name: 'default',
            secret: 'blablacar',
            resave: false,
            saveUninitialized: false,
            cookie: {
                sameSite: true,
                maxAge: 3600 * 1000 * 3
            }
        }),
    );

    expressApp.set('views', path.join(__dirname, 'views'));
    expressApp.set('view engine', 'ejs');
    expressApp.use(express.json());
    expressApp.use(express.urlencoded({ extended: false }));
    expressApp.use(express.static(path.join(__dirname, 'assets')));

    expressApp.use(flash());

    expressApp.use((req, res, next) => {
        res.locals.success_message = req.flash('success');
        res.locals.error_message = req.flash('error');
        res.locals.active_message = req.flash('active');
        next();
    });



    /* Ajout de express-ejs-layouts */
    expressApp.use(ejsLayout);



    if (typeof callback != 'undefined') {
        callback();
    }
}




function loadRoutes(callback) {

    expressApp.get('/', isAuth, usercontroller.index);

    // expressApp.get('/', usercontroller.list);
    expressApp.get('/user', isAuth, usercontroller.list);
    expressApp.get('/trajet', isAuth, trajetcontroller.list);
    expressApp.get('/vehicules', isAuth, vehiculescontroller.list);
    expressApp.get('/entreprise', isAuth, entreprisecontroller.list);
    expressApp.get('/fiches', isAuth, fichecontroller.list);

    expressApp.post('/createaccount', isAuth, usercontroller.create);
    expressApp.post('/getaddvoiture', isAuth, vehiculescontroller.create);
    expressApp.post('/getaddtrajet', isAuth, trajetcontroller.create);
    expressApp.post('/getaddentreprise', isAuth, entreprisecontroller.create);

    expressApp.post('/deletevehicules/:id', isAuth, vehiculescontroller.delete);
    expressApp.post('/deleteuser/:id', isAuth, usercontroller.delete);
    expressApp.post('/deletetrajet/:id', isAuth, trajetcontroller.delete);
    expressApp.post('/deleteentreprise/:id', isAuth, entreprisecontroller.delete);

    expressApp.post('/updateuser/:id', isAuth, usercontroller.update);
    expressApp.post('/upuser', isAuth, usercontroller.up);
    expressApp.post('/updatevehicules/:id', isAuth, vehiculescontroller.update);
    expressApp.post('/upvehicules', isAuth, vehiculescontroller.up);

    expressApp.post('/log', authcontroller.login);
    expressApp.get('/logout', authcontroller.logout);



    expressApp.get('/register', isAuth, function (req, res) {
        res.render('homepage/register', { layout: 'layout-template.ejs', active: '' });
    });

    expressApp.get('/addentreprise', isAuth, function (req, res) {
        res.render('homepage/addentreprise', { layout: 'layout-template.ejs' ,active: '' });
    });
    expressApp.get('/addvoiture', isAuth, function (req, res) {
        res.render('homepage/addVoiture', { layout: 'layout-template.ejs',active: '' });
    });
    expressApp.get('/addtrajet', isAuth,function (req, res) {
        res.render('homepage/addtrajet', { layout: 'layout-template.ejs',active: '' });
    });
    expressApp.get('/login', function (req, res) {
        res.render('homepage/login', { layout: 'layout-template.ejs',active: '' });
    });
    expressApp.get('/test', function (req, res) {
        res.render('examples/dashboard', { layout: 'layout-template.ejs',active: '' });
    });
    expressApp.get('/test1', function (req, res) {
        res.render('examples/template', { layout: 'layout-template.ejs',active: '' });
    });
    expressApp.get('/notif', function (req, res) {
        res.render('examples/notifications', { layout: 'layout-template.ejs',active: '' }, );
    });
    expressApp.get('/icon', function (req, res) {
        res.render('examples/icons', { layout: 'layout-template.ejs',active: '' }, );
    });

    if (typeof callback != 'undefined') {
        callback();
    }
}

module.exports = {
    start: start
};