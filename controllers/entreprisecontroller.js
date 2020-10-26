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


    exports.update = async function (req, res){

// Now this entry was removed from the database
        try {
            const id = req.params.id
            const entreprise = await models.Entreprise.findByPk(id);
            res.render('homepage/updateentreprise', { entreprise : entreprise, active: 'te' });
        } catch (error) {
            req.flash('error', 'Une erreur est survenue');
            return res.redirect('/entreprise');
        }


    };

    exports.up = async function (req, res){

        const {
            id,
            nom_entreprise,
            type_entreprise,
        } = req.body;

        const Entreprise = await models.Entreprise.findOne({where: {id}});

        if (Entreprise == null) {
            req.flash('error', 'L\'ntreprise non trouvé dans la base.');
            return res.redirect('/user');
        }
        try {

            await  Entreprise.update({
                nom_entreprise : nom_entreprise,
                type_entreprise : type_entreprise
            })
            await Entreprise.save();
            req.flash('success', 'La modification de l\'entreprise bien était prise en compte.');
            res.status(201).render(res.redirect('/entreprise'))

        } catch (error) {
            res.status(400).json({
                result: "error"
            })
        }



    };





