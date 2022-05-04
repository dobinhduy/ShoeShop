import mongoose from "mongoose";


const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rating:{
        type: Number,
        required:true,
    },
    comment:{
        type: Number,
        required:true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",
    }

})
const  productSchema = mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    image: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        
    },
    review: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReview: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInstock:{
        type: Number,
        required: true,
        default: 0,
    }
},
    {
        timestamps: true,
    }
)
const Product  = mongoose.model("Product",productSchema);
export default Product;