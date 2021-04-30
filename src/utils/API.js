const axios = require("axios")

let API_KEY = "XU066F7etWHxuwTAOjpw0r41SBjwzsAAEDOTZQORj69J3hLv7yroOb0A3qGcDcqU77KbTGxFcxdxeU7JiIhtlLnTrCrmNK2VAWqYCynLuyE9Z3SuSXxE5K6x7RqLYHYx"

// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})

yelpREST(ENDPOINT, { params: { key: value } }).then(({ data }) => {
  // Do something with the data
})

yelpREST("/businesses/search", {
    params: {
      location: "",
      term: ["dispensaries", "dispensary"],
      limit: 10,
    },
  }).then(({ data }) => {
    let { businesses } = data
    businesses.forEach((b) => {
      console.log("Name: ", b.name)
    })
  })