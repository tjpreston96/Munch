const User = require("../models/user");

module.exports = {
  index,
  showUserProfile,
  showOtherUsers,
  update,
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function showUserProfile(req, res) {
  User.findById(req.user._id)
  .then((user) => {
    res.json(user)
  })
}

function showOtherUsers(req, res) {
  User.findById(req.params.id)
  .then((user) => {
    res.json(user)
  })
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new:true })
  .then((user) => {
    res.json(user)
  })
}