const { Router } = require("express");
const countriesRouter = require("./CountriesRouter");

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);

module.exports = mainRouter;
