const CookBook = require("../models/cookbook")

module.exports = {
    create,
    index,
    delete: deleteOne,
    update
};

function create(req, res) {
  req.body.addedBy = req.user._id
  CookBook.create(req.body)
  .then(entry => {res.json(entry)})
  .catch(err => {res.json(err)})
};

function index(req, res) {
  CookBook.find({})
  .populate('addedBy')
  .then(entries => {res.json(entries)})
  .catch(err => {res.json(err)})
};

function deleteOne(req, res) {
  CookBook.findByIdAndDelete(req.params.id)
  .then(entry => {res.json(entry)})
  .catch(err => {res.json(err)})
};

function update(req, res) {
  CookBook.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(entry => {res.json(entry)})
  .catch(err => {res.json(err)})
};