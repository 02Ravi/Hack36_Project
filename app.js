const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');

//MONGOOSE
// const mongoose = require('mongoose');
// const { Collection } = require("mongodb");
// mongoose.connect("mongodb://localhost/webDB",
//     process.env.MONGO_URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//     },
//     () => {
//         console.log("mongdb is connected");
//     }
// );
// let db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//     console.log("connected");
// });

// const loginSchema = new mongoose.Schema({
//     phoneNo: String,
//     password: String
// });
// const loginModel = mongoose.model('users', loginSchema);

// const silence = new loginModel({ phoneNo: '92', password: "ak" });

// silence.save(function (err, result) {
//     if (err) {
//         console.log(err);
//     }
//     // else {
//     //     console.log(result)
//     // }
// });


//STATIC FILES
// app.use(express.static(path.join(__dirname, "/index.css"))); //delete
app.use(express.static(path.join(__dirname, "Seller/cssANDjs")));
app.use(express.static(path.join(__dirname, "Consumer/cssANDjs")));
app.use(express.static(path.join(__dirname, "Seller/images")));
app.use(express.static(path.join(__dirname, "Consumer/images")));
//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());

//HOMEPAGE
const index = fs.readFileSync("index.html", "utf-8");
//SELLER
const merchant = fs.readFileSync("Seller/indexS.html", "utf-8");
const signin_page = fs.readFileSync("Seller/signinS.html", "utf-8");
const signup_page = fs.readFileSync("Seller/signupS.html", "utf-8");
const display_Prod = fs.readFileSync("Seller/disProd.html", "utf-8");
const addItems_page = fs.readFileSync("Seller/add.html", "utf-8");
//CONSUMER
const customer = fs.readFileSync("Consumer/indexC.html", "utf-8");

//HOME NAVIGATION
app.get("/", (req, res) => {
    res.send(index);
});
app.get("/about", (req, res) => {
    res.status(300).send(index);
});
app.get("/contact", (req, res) => {
    res.status(300).send(index);
});

//SELLER NAVIGATION
app.get("/seller", (req, res) => {
    res.send(merchant);
});
app.get("/seller/signin", (req, res) => {
    res.send(signin_page);
});
app.get("/seller/signup", (req, res) => {
    res.send(signup_page);
});

//CONSUMER NAVIGATION
app.get("/consumer", (req, res) => {
    res.send(customer);
});


//SIGNIN DATABASE
app.get("/disProd", (req, res) => {
    // const silence = new loginModel(req.body);
    // console.log(req.body);

    // silence.save(function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.json(silence);
    // });

    res.send(display_Prod);
});
app.post("/disProd", (req, res) => {
    res.send(display_Prod);
});
app.get("/addItem", (req, res) => {
    res.send(addItems_page);
});


















//STARTING SERVER
const hostname = '127.0.0.1';
const port = 80;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});