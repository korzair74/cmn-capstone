var express = require("express");
var router = express.Router();
const tamingStat = require("../Models/tamingStat");

router.route("/").get((req, res) => {
  tamingStat
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
