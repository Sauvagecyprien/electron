var models = require('../models');



exports.list = async function (req, res){
    const entites = await models.Entreprise.findAll();

    console.log("All users:", JSON.stringify(entites, null, 2));
    var test = entites;
    res.render('homepage/entreprise', { layout: 'layout-template.ejs', test : test, active: 'entreprise' });
}

exports.delete = async function (req, res){

// Now this entry was removed from the database
//     try {
    const id = req.params.id
    console.log(id);

    const jane = await models.Entreprise.findByPk(id);
    console.log('valeur de jane :',JSON.stringify(jane, null, 2));
    await jane.destroy();
    res.status(200).render(res.redirect('/entreprise'))



}

exports.create = async function (req, res){

    const {
        nom_entreprise,
        type_entreprise

    } = req.body
    try {
        const user = await models.Entreprise.create({
            nom_entreprise,
            type_entreprise
        })
        res.status(201).render(res.redirect('/entreprise'))

    } catch (error) {
        res.status(400).json({
            result: "error"
        })
    }



}



