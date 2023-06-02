require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const clientRouter = require("./Routes/Client/clientRouter");
const app = express();
const mongoString = process.env.DATABASE_URL;
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

//Client Routes
app.use("/api/client", clientRouter);

app.listen(4000, () => {
  console.log(`Server Started at \${4000}`);
});
