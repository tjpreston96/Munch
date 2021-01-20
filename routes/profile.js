const express = require('express');
const router = express.Router();
const profileCtrl = require('../controller/profile');

//public-------------------



//protected-------------------
router.use(require("../config/auth"));
router.get("/", checkAuth, profileCtrl.index);
router.get("/profile", checkAuth, profileCtrl.showUserProfile);
router.get("/profile/:id", checkAuth, profileCtrl.showOtherUsers);
router.put("/profile", checkAuth, profileCtrl.update);
router.get("/addrecipe", checkAuth, profileCtrl.addRecipeToCookbook);
router.put("/deleterecipe", checkAuth, profileCtrl.deleteRecipeFromCookbook);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;