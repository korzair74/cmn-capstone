const mongoose = require("mongoose");

const breedingStatSchema = new mongoose.Schema(
  {
    species: {
      type: String,
    },
    max_c: {
      type: Number,
    },
    min_C: {
      type: Number,
    },
    max_f: {
      type: Number,
    },
    min_f: {
      type: Number,
    },
    Baby: {
      type: String,
    },
    Juvenile: {
      type: String,
    },
    Adolescent: {
      type: String,
    },
    Mating_Interval: {
      type: String,
    },
    Total: {
      type: String,
    },
    mat_time: {
      type: String,
    },
  },
  { collection: "breedingStats" }
);

module.exports = mongoose.model("breedingStat", breedingStatSchema);
