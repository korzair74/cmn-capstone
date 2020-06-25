var express = require("express");
var router = express.Router();
const arkdata = require("../Models/arkdata");

router.route("/").get((req, res) => {
  arkdata
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
