const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";

main().then(() => {
    console.log("connect to DB");
}) .catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.send("hi i am root");
});

// index route
app.get("/listing", async(req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {allListings});
});

//Show route
app.get("/listings/:id", async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing})
})

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});