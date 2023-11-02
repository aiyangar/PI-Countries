const getCountriesHandler = async (req, res) => {
  try {
    res.status(200).send({message: "Hello from getCountriesHandler!"});
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