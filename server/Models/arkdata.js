const mongoose = require("mongoose");

const arkdataSchema = new mongoose.Schema(
  {
    name: "",
    levelOne: [
      {
        food_type: "",
        food_qty: "",
        narcoBerries: "",
        narcotics: "",
        biotoxin: "",
        time: "",
      },
    ],
    levelThirty: [
      {
        food_type: "",
        food_qty: "",
        narcoBerries: "",
        narcotics: "",
        biotoxin: "",
        time: "",
      },
    ],
    levelSixty: [
      {
        food_type: "",
        food_qty: "",
        narcoBerries: "",
        narcotics: "",
        biotoxin: "",
        time: "",
      },
    ],
    levelNinety: [
      {
        food_type: "",
        food_qty: "",
        narcoBerries: "",
        narcotics: "",
        biotoxin: "",
        time: "",
      },
    ],
    levelOneHundredTwenty: [
      {
        food_type: "",
        food_qty: "",
        narcoBerries: "",
        narcotics: "",
        biotoxin: "",
        time: "",
      },
    ],
    levelOneHundredFifty: [
      {
        food_type: "",
        food_qty: "",
        narcoBerries: "",
        narcotics: "",
        biotoxin: "",
        time: "",
      },
    ],
  },
  { collection: "arkdata" }
);

module.exports = mongoose.model("arkdata", arkdataSchema);
