const User = require("../models/user");

module.exports = {
  index,
  showUserProfile,
  showOtherUsers,
  update,
  addRecipeToCookbook,
  deleteRecipeFromCookbook,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function showUserProfile(req, res) {
  User.findById(req.user._id).then((user) => {
    res.json(user);
  });
}

function showOtherUsers(req, res) {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true }).then((user) => {
    res.json(user);
  });
}

function addRecipeToCookbook(req, res) {
  User.findById(req.user._id)
    .populate("cookbook")
    .then((user) => {
      res.json(user.cookbook);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteRecipeFromCookbook(req, res) {
  User.findById(req.user._id)
    .then((user) => {
      let idx = user.cookbook.findIndex((x) => x._id === req.params.id);
      user.cookbook.splice(idx, 1);
      user.save();
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
}
