const express = require('express')
const router = express.Router();
const apiRoutes = require('./apiRoutes')

router.use('/api', apiRoutes)

router.get('/', (req,res)=> {
    res.send('<h1> hitting get route on / </h1>')
})

module.exports = router;

