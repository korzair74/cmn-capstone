var express = require("express");
var router = express.Router();
const breedingStat = require("../Models/breedingStat");

router.route("/").get((req, res) => {
  breedingStat
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
