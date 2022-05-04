import mongoose from "mongoose";
const  orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    orderItems:[{
        name: {
            type: String,required:true,
        },
        qty:{type:Number,required:true},
        image:{type:String,required:true},
        price:{type:Number,required:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        }
    }],
    shippingAddress:{
        address: {type:String, require:true},
        city: {type: String, require: true},
        postalCode: {type: String ,require : true},
        country: {type:String, require: true},
    },
    paymenMethod:{
        type:String, require: true, default:"Paypal",
    },
    paymentResult:{
        id:{type: String},
        status: {type:String},
        update_time: {type : String},
        email_address: {type: String},
    },
    taxPrice:{
        type: Number,
        require: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    totalPrice:{
        type: Number,
        require: true,
        default: 0.0,
    },
    isPaid:{
        type :Boolean,
        require: true,
        default: false,
    },
    paidAt:{
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false
    }, 
    deliveredAt:{
        type: Date,
    },
},
    {
        timestamps: true,
    }
)
const Order  = mongoose.model("Order",orderSchema);
export default Order;