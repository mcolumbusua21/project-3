const axios = require("axios")
const API_KEY = process.env.API_KEY;


// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})

// yelpREST(ENDPOINT, { params: { key: value } }).then(({ data }) => {

// })
const getDispensaries =async ()=> {

  try {
    const response = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=dispensary,dispensaries`)
    const { data } = response
    return data
    
  } catch(err) {
    console.log(err)
  }
}


// yelpREST.get("/businesses/search", {
//     params: {
//       location: "",
//       term: ["dispensaries", "dispensary"],
//       limit: 10,
//     },
//   }).then(({ data }) => {
//     let { businesses } = data
//     businesses.forEach((b) => {
//       console.log("Name: ", b.name)
//     })
//   })


  // yelpREST.get("/businesses/9QFiF_YBCKvWsUu50G_yxg/reviews").then(({ data }) => {
  //   console.log(data)
  // })


  // yelpREST.get("/autocomplete", {
  //   params: {
  //     location: "pdx",
  //     text: "stumpt",
  //   },
  // }).then(({ data }) => {
  //   console.log(data)
  // })

  export {
    getDispensaries
  }