var mongoose = require("mongoose");
var grocerySchema = mongoose.Schema({
  grocerycategory: {
    type: String,
  },
  groceryname: {
    type: String,
  },
  groceryprice: {
    type: Number,
  },
  // groceryimage: {
  //   type: String,
  // },
  groceryqty: {
    type: Number,
    default: 0,
  },
  groceryavail: {
    type: Boolean,
    default: false,
  },
  // unlimited: {
  //     type: Boolean, default: false
  // },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("grocery", grocerySchema);
