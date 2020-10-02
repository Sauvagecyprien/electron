
const session     = require('express-session');
// Get all models
const Entreprise= require('./models/entreprise');
const Fiche= require('./models/fiche');
const Vehicle= require('./models/vehicule');
const Trajet = require('./models/trajet');
const User= require('./models/user');



/* Appel de tous nos outils */



const express = require('express');
const expressApp = express();
const http = require('http').Server(expressApp);
const flash       = require('connect-flash');
const path = require('path');
const sqlite3 = require("sqlite3").verbose();


/* Ajout de express-ejs-layouts */
const ejsLayout = require('express-ejs-layouts');
 
/* Initialisation des variables */
const router = {
    isStarted: false
};

var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';




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
 
    /* Ajout de express-ejs-layouts */
    expressApp.use(ejsLayout);
 
    /* J'utilise ici EJS comme moteur de template */
    expressApp.set('view engine', 'ejs');
 
    /* assets sera le répertoire où se trouverons nos fichiers côté client */
    expressApp.use(express.static(path.join(__dirname, 'assets')));
 
    /* views est défini comme notre dossier de vues par défaut */
    expressApp.set('views', path.join(__dirname, '/views/'));
 
    if (typeof callback != 'undefined') {
        callback();
    }
}
 
/* ROUTES */
var usercontroller = require('./controllers/usercontroller');
var vehiculescontroller = require('./controllers/vehiculescontroller');
var trajetcontroller = require('./controllers/trajetcontroller');
var entreprisecontroller = require('./controllers/entreprisecontroller');
var fichecontroller = require('./controllers/fichescontroller');
var authcontroller = require('./controllers/authcontroller');
const bodyParser = require('body-parser');

// Middleware
const isAuth = require('./middleware/auth');

expressApp.use(bodyParser.urlencoded({ extended: false }));

function loadRoutes(callback) {

    expressApp.get('/', isAuth, usercontroller.list);

    // expressApp.get('/', usercontroller.list);
    expressApp.get('/user', usercontroller.list);
    expressApp.get('/trajet', trajetcontroller.list);
    expressApp.get('/vehicules', vehiculescontroller.list);
    expressApp.get('/entreprise', entreprisecontroller.list);
    expressApp.get('/fiches', fichecontroller.list);

    expressApp.post('/createaccount', usercontroller.create);
    expressApp.post('/getaddvoiture', vehiculescontroller.create);
    expressApp.post('/getaddtrajet', trajetcontroller.create);
    expressApp.post('/getaddentreprise', entreprisecontroller.create);

    expressApp.post('/deletevehicules/:id', vehiculescontroller.delete);
    expressApp.post('/deleteuser/:id', usercontroller.delete);
    expressApp.post('/deletetrajet/:id', trajetcontroller.delete);
    expressApp.post('/deleteentreprise/:id', entreprisecontroller.delete);

    expressApp.post('/log', authcontroller.login);

    expressApp.get('/register', function (req, res) {
        res.render('homepage/register', { layout: 'layout-base.ejs' });
    });
    expressApp.get('/addentreprise', function (req, res) {
        res.render('homepage/addentreprise', { layout: 'layout-base.ejs' });
    });
    expressApp.get('/addvoiture', function (req, res) {
        res.render('homepage/addVoiture', { layout: 'layout-base.ejs' });
    });
    expressApp.get('/addtrajet', function (req, res) {
        res.render('homepage/addtrajet', { layout: 'layout-base.ejs' });
    });
    expressApp.get('/login', function (req, res) {
        res.render('homepage/login', { layout: 'layout-base.ejs' });
    });



    if (typeof callback != 'undefined') {
        callback();
    }
}


/** middleware setup */
expressApp.use(
    session({
        name: 'default',
        secret: 'IdHmkkt7KJDJgbnlkejaosOUazV0JdaeasdLKLHdjKJKHEZ65486SFERTqeazae',
        resave: false,
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            maxAge: 3600 * 1000 * 3
        }
    })
);

expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'ejs');
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.static(path.join(__dirname, 'public')));

expressApp.use(flash());

expressApp.use((req, res, next) => {
    res.locals.success_message = req.flash('success');
    res.locals.error_message   = req.flash('error');
    res.locals.username = req.session.name;
    next();
});


 
module.exports = {
    start: start
};