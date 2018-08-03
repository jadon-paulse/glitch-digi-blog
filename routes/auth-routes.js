const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login",(req,res) => {
  res.render('login');
});

router.get("/logout",(req,res) => {
  // handle with passport
  res.send("logging out");
})

// auth with goole
router.get("/google", passport.authenticate("google", {
  scope:["profile"]
}));

module.exports= router;