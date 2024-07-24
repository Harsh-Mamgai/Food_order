const express = require("express");
const itemmiddleware = require("../middlewares/itemmiddleware.js");
const itemController = require("../controllers/itemController.js");
const routes = express.Router();

routes.get("/", itemController.getItems);
routes.get("/appetizers", itemmiddleware.checkAuth, itemController.getAppetizers);
routes.get("/maincourse", itemmiddleware.checkAuth, itemController.getMainCourse);
routes.get("/deserts", itemmiddleware.checkAuth, itemController.getDeserts);
routes.get("/drinks", itemmiddleware.checkAuth, itemController.getDrinks);
module.exports = {
    routes : routes
}