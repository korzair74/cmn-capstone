const mongoose = require("mongoose");

const tamingStatSchema = new mongoose.Schema(
  {
    creature: {
      type: String,
    },
    health_base: {
      type: String,
    },
    health_tame: {
      type: String,
    },
    health_wild: {
      type: String,
    },
    stamina_base: {
      type: String,
    },
    oxygen_base: {
      type: String,
    },
    oxygen_tame: {
      type: String,
    },
    oxygen_wild: {
      type: String,
    },
    stamina_tame: {
      type: String,
    },
    stamina_wild: {
      type: String,
    },
    damage_base: {
      type: String,
    },
    damage_tame: {
      type: String,
    },
    damage_wild: {
      type: String,
    },
    food_base: {
      type: String,
    },
    food_tame: {
      type: String,
    },
    food_wild: {
      type: String,
    },
    movement_speed_base: {
      type: String,
    },
    movement_speed_tame: {
      type: String,
    },
    torpidity_base: {
      type: String,
    },
    torpidity_wild: {
      type: String,
    },
    weight_base: {
      type: String,
    },
    weight_tame: {
      type: String,
    },
    weight_wild: {
      type: String,
    },
  },
  { collection: "tamingStats" }
);

module.exports = mongoose.model("tamingStat", tamingStatSchema);
