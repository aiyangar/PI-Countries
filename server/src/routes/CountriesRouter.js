const { Router } = require("express");

const countriesRouter = Router();

countriesRouter.get("/", (req, res) => {
  res.status(200).send("Hello from countries!");
});

countriesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Hello from country ${id}!`);
});

countriesRouter.post("/", (req, res) => {
  const { body } = req;
  res.status(200).send(body);
});

module.exports = countriesRouter;