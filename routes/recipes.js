const express = require("express");
const router = express.Router();
const recipesCtrl = require("../controllers/recipes");

/*---------- Public Routes ----------*/
// router.get('/', recipesCtrl.index);

/*---------- Protected Routes ----------*/
// router.get('/new', checkAuth, recipesCtrl.new)
router.post("/search", checkAuth, recipesCtrl.search);
// router.get('/:id', checkAuth, recipesCtrl.show)

// ======== Is User LoggedIn ======== //
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
