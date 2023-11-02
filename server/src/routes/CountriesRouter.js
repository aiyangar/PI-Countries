const { Router } = require("express");
const { 
  getCountriesHandler, 
  getCountryByIdHandler,
  postCountryHandler
} = require("../handlers/CountriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountryByIdHandler);

countriesRouter.post("/", postCountryHandler);

module.exports = countriesRouter;