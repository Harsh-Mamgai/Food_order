const express = require("express");
const orderController = require("../controllers/orderController.js");
const orderMiddleware = require("../middlewares/itemmiddleware.js");
const routes = express.Router();

routes.post("/order", orderMiddleware.checkAuth, orderController.placeOrder);
module.exports = {
    routes : routes
}