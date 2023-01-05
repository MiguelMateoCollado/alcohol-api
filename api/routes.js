const { Router } = require("express");
const router = Router();
const getDrinks = require("./routes/getDrinks.js");
const getCategory = require("./routes/getCategory.js");
const getOrigen = require("./routes/getOrigen.js");
router.use("/", getDrinks);
router.use("/", getCategory);
router.use("/", getOrigen);
module.exports = router;