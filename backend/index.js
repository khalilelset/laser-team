require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const mongoString = process.env.DATABASE_URL;
const clientRouter = require("./Routes/Client/clientRouter");
const CraftownerSingup = require("./Routes/SingUpRoute/CraftOwner");
const CompanyRouter = require("./Routes/Company/CompanyRouter");


//const routes = require('./route');
var cors = require("cors");
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
const router = express.Router();

//Client Routes
app.use("/", clientRouter);

//CompanyRoutes
app.use("/", CompanyRouter);

//craft owner route singup
app.use("/", CraftownerSingup);


app.listen(4000, () => {
  console.log(`Server Started at \${4000}`);
});
