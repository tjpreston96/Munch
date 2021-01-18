const Recipe = require('../models/board');


module.exports = {
    index,
    create,
    show,
    reply
}

function index(req, res) {
    Recipe.find({})
    .then((recipes) => {
    res.json(recipes);
    });
    }

function create(req, res){

};

function show(req, res){

};

function reply(req, res){

};

