const { Router } = require("express");
const { 
  getCountriesHandler, 
  getCountryByIdHandler,
  postCountryHandler
} = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountryByIdHandler);

countriesRouter.post("/", postCountryHandler);

module.exports = countriesRouter;
// Cosas que se deben agregar