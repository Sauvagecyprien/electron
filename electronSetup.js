const path        = require('path');
const express     = require('express');
const expressApp  = express();
const database    = require('./config/database');
const session     = require('express-session');
const flash       = require('connect-flash');

// Get all models
const Entreprise= require('./models/entreprise');
const Fiche= require('./models/fiche');
const Vehicle= require('./models/vehicule');
const Trajet = require('./models/trajet');
const User= require('./models/user');



