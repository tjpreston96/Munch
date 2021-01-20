const Profile = require("../models/profile");

module.exports = {
  index,
  showProfile,
  update,
  addRecipeToCookbook,
  deleteRecipeFromCookbook
};


function index(req, res){
Profile.find({})
.then((profile) => {res.json(profile)})
.catch((err) => {res.json(err)})
};

function showProfile(req, res){


};

function update(req, res){


};

function addRecipeToCookbook(req, res){


};

function deleteRecipeFromCookbook(req, res){


};
