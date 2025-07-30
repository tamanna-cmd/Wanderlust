const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url:{
        type: String,
        set: (v) => v === "" ? "https://via.placeholder.com/300x200.png?text=No+Image" : v,
        },
        filename: String  
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;