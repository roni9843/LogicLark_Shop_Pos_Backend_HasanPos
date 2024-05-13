const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the InvoiceHistorySchema
const InvoiceHistorySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User schema
    required: true,
  },
  inId: {
    type: String,
    required: true,
  },
  buyDate: {
    type: Date,
    default: Date.now, // Default value will be current date/time
  },
  details: {
    type: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
    default: [],
  },
  subTotal: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0, // Default value of 0 if not provided
  },
  total: {
    type: Number,
    required: true,
  },
  accountReceived: {
    type: Number,
    required: true,
  },
  due: {
    type: Number,
    required: true,
  },
  due_history: {
    type: Number,
    require: false,
    default: 0,
  },
});

// Create and export the Due model
const InvoiceHistory = mongoose.model("InvoiceHistory", InvoiceHistorySchema);
module.exports = InvoiceHistory;
