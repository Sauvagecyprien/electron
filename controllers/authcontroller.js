const bcrypt                = require('bcryptjs');
const { validationResult }  = require('express-validator');
const models = require('../models');
require('../electronSetup');

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.redirect('/');
    }

    try {
        const userExist = await models.User.findOne({where: {email}});

        if(!userExist) {

            req.flash('error', 'Adresse email introuvable, saississez une adresse mail valide');
            return res.redirect('/login');
        }

        const isEqual = await bcrypt.compare(password, userExist.password);
console.log(isEqual);

        if (isEqual) {
            req.session.isLoggedIn = true;
            req.session.userId = userExist.id;
            req.session.username = userExist.prenom;
            return req.session.save(err => {
                res.redirect('/');
            });
        };
        req.flash('error', 'Identifiant ou mot de passe invalide');
        return res.redirect('/login');

    } catch (error) {
        console.log(error)
        req.flash('error', 'Une erreur est survenue');
        return res.redirect('/');
    }
}


exports.register = async (req, res, next) => {
    const {  nom,
        prenom,
        entreprise,
        email,
        password,
        role } = req.body;

    try {
        if (role == 'admin' || role == 'user') {
            const hashedPwd = await bcrypt.hash(password, 12);

            const newPerson = new Persons({
                nom,
                prenom,
                entreprise,
                email,
                password: hashedPwd,
                role
            });

            await newPerson.save();
            return console.log('create')
        }
        return console.log('role incorrecte')

    } catch (error) {
        console.log(error);
    }
}

exports.logout = (req, res, next) => {
    req.session.destroy((err)=> {
        if(err) {
            console.log(err)
        }
        res.redirect('/login')
    })
}