const { Router } = require("express");
const countriesRouter = require("./CountriesRouter");

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);
mainRouter.use()

module.exports = mainRouter;
