import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      { name: {type:String, required:true}, quantity: {type:Number, required:true}, image: {type:String, required:true}, price: {type:Number, required:true} },
    ],
    shippingAddress: {
        fullName: String,
        addres: String,
        city: String,
        postalCode: String,
        country: String,
    },
    paymentMethod: {type:String, required:true},
    itemsPrice: {type:Number, required:true},
    shippingPrice: {type:Number, required:true},
    taxPrice: {type:Number, required:true},
    totalPrice: {type:Number, required:true},
    isPaid: {type:Boolean, required:true, default:false},
    isDelivered: {type:Boolean, required:true, default:false},
    padiAt: {type:Date},
    deliveredAt: {type:Date},
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
