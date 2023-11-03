const {
  getAllCountriesController,
} = require("../controllers/countriesController");

const getCountriesHandler = async (req, res) => {
  try {
    const allCountries = await getAllCountriesController();
    res.status(200).send(allCountries);

  } catch (error) {
    res.status(400).send({error: error.message});
  }
}

const getCountryByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).send(`Hello from country ${id}!`);
  } catch (error) {
    res.status(400).send({error: error.message});
  }
}

const postCountryHandler = async (req, res) => {
  const { id, name } = req.body;

  try {
    res.status(200).json(id, name);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  getCountriesHandler,
  getCountryByIdHandler,
  postCountryHandler
}