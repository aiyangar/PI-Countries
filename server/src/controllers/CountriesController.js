const axios = require('axios');
const { Country } = require("../db");
const { Sequelize } = require("sequelize");
const { URL } = process.env;

const getAllCountriesController = async ()=>{
  const countriesDB = await Country.findAll();
  const countriesAPI = await axios.get(`${URL}/countries`);

  return [...countriesDB, ...countriesAPI.data];
}

module.exports = {
  getAllCountriesController
}; 