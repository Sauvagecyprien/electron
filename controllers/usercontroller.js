var models = require('../models');



exports.list = async function (req, res){
    const entites = await models.User.findAll();

    console.log("All users:", JSON.stringify(entites, null, 2));
var test = entites;
    res.render('homepage/index', { layout: 'layout-base.ejs', test : test });
}

exports.create = async function (req, res){
    const entites = await models.User.create({nom: req.body.nom, prenom : req.body.prenom, entreprise : req.body.entreprise, email : req.body.email, password : req.body.password});

    res.render('homepage/index', { layout: 'layout-base.ejs', test : test });
}
