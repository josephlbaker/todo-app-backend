const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const user = require("../controllers/userController");

router.get("/", user.show);
router.post("/login", user.login);
router.post("/signup", user.signup);
router.put('/:id/update', user.update);
router.delete("/delete", user.delete);

router.use((req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    let verified = jwt.verify(req.token, "bWF0dGJyYW5kb25qb2VjaHJpc3RpbmE=");
    console.log("Verified ", verified);
    req.userId = verified._id;
    next();
  } else {
    res.sendStatus(403);
  }
});


module.exports = router;
