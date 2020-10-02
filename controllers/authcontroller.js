const bcrypt                = require('bcryptjs');
const { validationResult }  = require('express-validator');

const models = require('../models');
require('../electronSetup');

/**
 * Handle post login
 *
 * @function postLogin
 * @returns {VIEW} redirect to '/dashboard'
 * @throws Will throw an error if one error occursed
 */
exports.login = async (req, res, next) => {
    const { login, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.redirect('/');
    }

    try {
        const userExist = await models.User.findOne({where: {email}});

        if(!userExist) {

                res.status(400).json({
                    result: "error user exist"
                })

            return res.redirect('/');
        }

        const isEqual = await bcrypt.compare(password, userExist.password);

        if (isEqual) {
            req.session.isLoggedIn = true;
            req.session.userId = userExist.id;
            return req.session.save(err => {
                res.redirect('/');
            });
        };
            res.status(400).json({
                result: "error identifiant ou mot de passe incorrect"
            })

        return res.redirect('/');

    } catch (error) {
        console.log(error)
        res.status(400).json({
            result: "une erreur est survenue"
        })
        return res.redirect('/');
    }
}



/**
 * Handle post signup
 *
 * @function postSignup
 * @returns {VIEW} redirect to '/persons'
 * @throws Will throw an error if one error occursed
 */
exports.register = async (req, res, next) => {
    const {  nom,
        prenom,
        entreprise,
        email,
        password,
        role } = req.body;

    try {
        if (role == 'administrator' || role == 'guest') {
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


/**
 * Handle logout
 *
 * @function logout
 * @returns {VIEW} redirect to '/'
 */
exports.logout = (req, res, next) => {
    req.session.destroy((err)=> {
        if(err) {
            console.log(err)
        }
        res.redirect('/')
    })
}