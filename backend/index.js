require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const mongoString = process.env.DATABASE_URL;
const clientRouter = require("./Routes/Client/clientRouter");
const CraftownerSingup = require("./Routes/SingUpRoute/CraftOwner");
const CompanyRouter = require("./Routes/Company/CompanyRouter");
const CraftownerPostProduct = require("./Routes/post page/OwnerPostProduct");
const cookieParser = require("cookie-parser");

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
app.get("/profile", validateToken, (req, res) => {
  res.json("profile");
});

//CompanyRoutes
app.use("/", CompanyRouter);

//craft owner route singup
app.use("/", CraftownerSingup);

//craft owner route post product
app.use("/", CraftownerPostProduct);

app.listen(4000, () => {
  console.log(`Server Started at \${4000}`);
});
