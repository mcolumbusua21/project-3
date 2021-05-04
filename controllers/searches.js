const searchesRouter = require('express').Router();

searchesRouter.get('/', (req, res) => {
    return res.send('Get')
});

searchesRouter.post('/', (req, res) => {
    return res.send('Post')
});

module.exports = searchesRouter
