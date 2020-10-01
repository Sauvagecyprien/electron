var models = require('../models');



exports.list = async function (req, res){
    const entites = await models.User.findAll();

    console.log("All users:", JSON.stringify(entites, null, 2));
var test = entites;
    res.render('homepage/index', { layout: 'layout-base.ejs', test : test });
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


}

exports.create = async function (req, res){

    const {
        nom,
        prenom,
        entreprise,
        email,
        password
    } = req.body
    try {
        const user = await models.User.create({
            nom,
            prenom,
            entreprise,
            email,
            password
        })
        res.status(201).render(res.redirect('/'))

    } catch (error) {
        res.status(400).json({
            result: "error"
        })
    }




    // const entites = await models.User.create({nom: req.body.nom, prenom : req.body.prenom, entreprise : req.body.entreprise, email : req.body.email, password : req.body.password});

    res.render('homepage/index', { layout: 'layout-base.ejs', test : test });
}



