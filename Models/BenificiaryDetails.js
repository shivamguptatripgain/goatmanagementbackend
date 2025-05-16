const mongoose = require("mongoose");

const beneficiaryDetailsSchema = new mongoose.Schema(
  {
    villageId: {
      type: String,
      required: true,
    },
    beneficiaryName: {
      type: String,
      required: false,
    },
    contactNumber: {
      type: Number,
      required: false,
    },
    dateOfReceiving: {
      type: Date,
      required: false,
    },
    disease: {
      type: String,
      required: false,
    },
    initialWeight: {
      type: String,
      required: false,
    },
    kidsFemale: {
      type: String,
      required: false,
    },
    kidsMale: {
      type: String,
      required: false,
    },
    numberOfGoats: {
      type: String,
      required: false,
    },
    weightAfter2Months: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    husbandName: {
      type: String,
      required: false,
    },
    dateOfReceiving: {
      type: Date,
      required: false,
    },
    vaccination: {
      type: Date,
      required: false,
    },
    deworming: {
      type: Date,
      required: false,
    },
    camp: {
      type: Date,
      required: false,
    },
    goat_kid: {
      type: Date,
      required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Benificiary_Details", beneficiaryDetailsSchema);
