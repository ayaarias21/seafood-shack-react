import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  menuItemId: String,
  name: String,
  price: Number,
  quantity: Number
});

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true
    },
    customerEmail: {
      type: String,
      required: true
    },
    orderType: {
      type: String,
      enum: ["Pickup", "Delivery", "Pay at Restaurant", "Card"],
      required: true
    },
    items: [orderItemSchema],
    total: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "Pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);