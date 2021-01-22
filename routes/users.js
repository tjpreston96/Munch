const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

/*---------- Public Routes ----------*/
router.use(require("../config/auth"));

/*---------- Protected Routes ----------*/
router.get("/", checkAuth, usersCtrl.index);
router.get("/profile", checkAuth, usersCtrl.showUserProfile);
router.get("/profile/:id", checkAuth, usersCtrl.showOtherUsers);
router.put("/profile", checkAuth, usersCtrl.update);
router.get("/addrecipe", checkAuth, usersCtrl.addRecipeToCookbook);
router.delete("/deleterecipe", checkAuth, usersCtrl.deleteRecipeFromCookbook);
router.post("/cookbook", checkAuth, usersCtrl.saveCookbook);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
