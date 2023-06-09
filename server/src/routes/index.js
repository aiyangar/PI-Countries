const { Router } = require("express");
const router = Router();

const countryRouter = require('./Country');
const activityRouter = require('./Activity');

router.use('./countries', countryRouter);
router.use('./activity', activityRouter);

module.exports = router;
