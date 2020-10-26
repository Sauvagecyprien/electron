var models = require('../models');
const bcrypt = require('bcryptjs');
require('../electronSetup');

exports.list = async function (req, res){
    const entites = await models.User.findAll();
var test = entites;
    res.render('homepage/user', { layout: 'layout-template.ejs', test : test, active : 'user' });
}

exports.delete = async function (req, res){

// Now this entry was removed from the database
    try {
        const id = req.params.id
        console.log(id);

        const jane = await models.User.findByPk(id);
        await jane.destroy();
        req.flash('success', 'La modification à bien été prise en compte.');
        res.status(200).render(res.redirect('/user'))
    } catch (error) {
        res.status(400).json({
            result: "dommage"
        })
    }


};



exports.update = async function (req, res){

// Now this entry was removed from the database
    try {
        const id = req.params.id
        const user = await models.User.findByPk(id);
        res.render('homepage/updateuser', { user : user, active: 'te' });
    } catch (error) {
        req.flash('error', 'Une erreur est survenue');
        return res.redirect('/user');
    }


};


exports.up = async function (req, res){

    const {
        nom,
        prenom,
        entreprise,
        email,
        password,
        role
    } = req.body;

    const userExist = await models.User.findOne({where: {email}});

    if (userExist == null) {
        req.flash('error', 'User na pas été trouvé dans la base.');
        return res.redirect('/user');
    }
    const hashedPwd = await bcrypt.hash(password, 12);
    try {

      await  userExist.update({
                nom: nom,
            prenom : prenom,
            entreprise : entreprise,
            email: email ,
            password: hashedPwd,
            role: role
            })
        await userExist.save();
        req.flash('success', 'la modification a bien etait prise en compte.');
        res.status(201).render(res.redirect('/user'))

    } catch (error) {
        res.status(400).json({
            result: "error"
        })
    }



};



exports.index = async function (req, res){
   res.render('homepage/index', { layout: 'layout-template.ejs', active : 'dash'});


};


exports.create = async function (req, res){

    const {
        nom,
        prenom,
        entreprise,
        email,
        password
    } = req.body;

    const userExist = await models.User.findOne({where: {email}});

        if (userExist != null) {
            return res.redirect('/register');
        }




    const hashedPwd = await bcrypt.hash(password, 12);
    try {
        const user = await models.User.create({
            nom,
            prenom,
            entreprise,
            email,
            password: hashedPwd,
            role: 'user'
        })
        res.status(201).render(res.redirect('/user'))

    } catch (error) {
        res.status(400).json({
            result: "error"
        })
    }



};




