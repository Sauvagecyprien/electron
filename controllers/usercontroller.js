var models = require('../models');
const bcrypt = require('bcryptjs');
require('../electronSetup');

exports.list = async function (req, res){
    const entites = await models.User.findAll();
var test = entites;
    res.render('homepage/user', { layout: 'layout-base.ejs', test : test });
}

exports.delete = async function (req, res){

// Now this entry was removed from the database
//     try {
        const id = req.params.id
        console.log(id);

        const jane = await models.User.findByPk(id);
    console.log('valeur de jane :',JSON.stringify(jane, null, 2));
        await jane.destroy();
        res.status(200).render(res.redirect('/'))
    // } catch (error) {
    //     res.status(400).json({
    //         result: "dommage"
    //     })
    // }


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
    console.log(userExist);

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
        res.status(201).render(res.redirect('/'))

    } catch (error) {
        res.status(400).json({
            result: "error"
        })
    }



};




