const mongoose = require("mongoose");

// Define the DueReceived schema
const dueReceivedSchema = new mongoose.Schema({
  receive_id: {
    type: String, // Assuming you're linking to another collection

    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  received_amount: {
    type: Number,
    required: true,
  },
  previous_due: {
    type: Number,
    required: true,
  },
  due_history: {
    type: Number,
    required: true,
  },
});

// Define and export the DueReceived model
const DueReceived = mongoose.model("DueReceived", dueReceivedSchema);

module.exports = DueReceived;
