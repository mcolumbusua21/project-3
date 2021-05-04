const router = require('express').Router();
const { default: axios } = require('axios');
const { Search } = require('../utils');

router.post('/', async (req, res) => {
    try{
        const searchData = await Search.create({
            business: req.body.business,
            business_id: req.body.business_id
        });
        res.status(200).json(searchData);
    }catch (err) {
        res.status(400).json(err)
    }
});

router.get('/', async (req, res) => {
    try{
        const {data} = await axios.get("https://api.yelp.com/v3/businesses/search", 
        {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-type": "application/json",
            },
            params: {
                    // location: "",
                    term: "dispensary"
                    // limit: 10,
                  },
          })
        res.json(data)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;