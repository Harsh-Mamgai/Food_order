const express = require("express");
const cors = require("cors");
const app = express();
const itemRoute = require("./routes/itemRoute.js");
const userRoute = require("./routes/userRoute.js");
const orderRoute = require("./routes/orderRoute.js");

app.use(cors());
app.use(express.json());
app.use("/items", itemRoute.routes);
app.use("/user", userRoute.routes);
app.use("/food", orderRoute.routes);

module.exports = app;