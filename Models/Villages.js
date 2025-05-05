const mongoose = require("mongoose");
const villageSchema = new mongoose.Schema(
   {
    villageName: {
         type: String,
         required: true,
      }
   },
   { timestamps: true }
);

module.exports = mongoose.model("Villages", villageSchema);
