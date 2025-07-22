const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";

main().then(() => {
    console.log("connect to DB");
}) .catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req,res) => {
    res.send("hi i am root");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});