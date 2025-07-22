const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) => v==="" ? "https://unsplash.com/photos/aerial-photography-of-beachside-b_Iz9tkrw6A" : v,  
    },
    price: Number,
    location: String,
    country: String,
});

module.exports = mongoose.model("Listing", listingSchema);