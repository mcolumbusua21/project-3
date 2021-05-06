// const router = require("express").Router();

// router.use("/dispensary", require("./dispensary"));

// module.exports = router;
const router = require('express').Router();
const dispRoutes = require('./dispensary')
router.use('/dispensary', dispRoutes)
module.exports = router