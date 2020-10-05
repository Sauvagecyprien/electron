var models = require('../models');

require('../electronSetup');

exports.list = async function (req, res){
    const entites = await models.Vehicule.findAll();

    console.log("All users:", JSON.stringify(entites, null, 2));
    var test = entites;
    res.render('homepage/vehicules', { layout: 'layout-template.ejs', test : test, active : 'vehicules' });
}

exports.delete = async function (req, res){

// Now this entry was removed from the database
//     try {
    const id = req.params.id
    console.log(id);

    const jane = await models.Vehicule.findByPk(id);
    console.log('valeur de jane :',JSON.stringify(jane, null, 2));
    await jane.destroy();
    res.status(200).render(res.redirect('/vehicules'))
    // } catch (error) {
    //     res.status(400).json({
    //         result: "dommage"
    //     })
    // }


}
exports.create = async function (req, res) {

    const {
        marques,
        modele,
        puissance,
        annee,
        immatriculations
    } = req.body
    try {
        const user = await models.Vehicule.create({
            marques,
            modele,
            puissance,
            annee,
            immatriculations
        })
        res.status(201).render(res.redirect('/vehicules'))

    } catch (error) {
        res.status(400).json({
            result: "error create vehicules "
        })
    }
}

exports.update = async function (req, res){
        try {
            const id = req.params.id
            const vehicules = await models.Vehicule.findByPk(id);
            res.render('homepage/updatevehicules', { layout: 'layout-template.ejs', vehicules : vehicules, active : '' });
        } catch (error) {
            req.flash('error', 'Une erreur est survenue');
            return res.redirect('/user');
        }


    }


    exports.up = async function (req, res){

        const {
            id,
            marques,
            modele,
            annee,
            puissance,
            immatriculations
        } = req.body;

        const vehiculeExist = await models.Vehicule.findOne({where: {id}});

        if (vehiculeExist == null) {
            req.flash('error', 'User na pas été trouvé dans la base.');
            return res.redirect('/user');
        }
        try {

            await  vehiculeExist.update({
                marques: marques,
                modele : modele,
                annee : annee,
                puissance: puissance ,
                immatriculations: immatriculations
            })
            await vehiculeExist.save();
            req.flash('success', 'la modification a bien etait prise en compte.');
            res.status(201).render(res.redirect('/vehicules'))

        } catch (error) {
            res.status(400).json({
                result: "error"
            })
        }



    };




