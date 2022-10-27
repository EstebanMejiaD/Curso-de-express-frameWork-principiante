const { Router } = require("express");

const router = Router();

router.get("/user", (req, res) => {
  console.log(req.body);
  res.send("username page");
});

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

module.exports = router;
