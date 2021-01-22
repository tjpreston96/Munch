const express = require("express");
const router = express.Router();
const recipesCtrl = require("../controllers/recipes");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post("/search", checkAuth, recipesCtrl.search);
router.post("/show/:id", checkAuth, recipesCtrl.recipeDetails);

// ======== Is User LoggedIn ======== //
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
