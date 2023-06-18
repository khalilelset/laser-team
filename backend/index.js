require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const mongoString = process.env.DATABASE_URL;
const clientRouter = require("./Routes/Client/clientRouter");
const cartRouter = require("./Routes/Client/cartRouter");
const CraftownerSingup = require("./Routes/SingUpRoute/CraftOwner");
const CraftownerPostProduct = require("./Routes/post page/OwnerPostProduct");
const CraftownerPostCraft = require("./Routes/post page/OwnerPostCraft");
const GetProducts = require("./Routes/store/StoreProduct");
const GetCraft = require("./Routes/store/StoreCraft");
const Contact = require("./Routes/Contact/contactRouter");
const profileOwner = require("./Routes/CraftOwner/CraftOwner")
const cookieParser = require("cookie-parser");

const companyRouter = require("./Routes/company/companyRouter");
const ProductOfOwner=require("./Routes/CraftOwner/CraftOwner")
//const routes = require('./route');
var cors = require("cors");
const { validateToken } = require("./JWT");
app.use(cors());
//app.use('/api', routes)

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());
app.use(cookieParser());
const router = express.Router();

//Client Routes
app.use("/", clientRouter);
// app.get("/profile", validateToken, (req, res) => {
//   res.json("profile");
// });

//Cart Routes
app.use("/", cartRouter);

//craft owner route singup
app.use("/", CraftownerSingup);

//craft owner route post product
app.use("/", CraftownerPostProduct);

//craft owner route post craft
app.use("/", CraftownerPostCraft);

//Company Routes
app.use("/", companyRouter);

//store product
app.use("/", GetProducts);

//store craft
app.use("/", GetCraft);

//Contact
app.use("/", Contact);


//profileOwner

app.use("/", profileOwner);


//ProductOfOwner
app.use("/", ProductOfOwner);

app.listen(4000, () => {
  console.log(`Server Started at \${4000}`);
});
