// import { get } from "mongoose"

const axios = require("axios")
// const API_KEY = process.env.YELP_API_KEY;

export const getDispensaries = async ()=> {

  try {
   
    const response = await axios.get("/api/dispensary")
    const { total } = response
    console.log(response)
    return total    
    
  } catch(err) {
    // console.log(err)
  }
}

export const singleDispensary = async () => {
  try {
    const response = await axios.get('/api/dispensary/id')
    const { total } = response
    console.log(response)
    return total
  }
  catch(err) {
    // console.log(err)
  }
}

// axios.get(yelpREST, {
//     params: {
//       // location: "",
//       term: "dispensary"
//       // limit: 10,
//     },
//   }).then(({ data }) => {
//     let { businesses } = data
//     businesses.forEach((b) => {
//       console.log("Name: ", b.name)
//     })
//   })


//   yelpREST.get("/businesses/9QFiF_YBCKvWsUu50G_yxg/reviews").then(({ data }) => {
//     console.log(data)
//   })


//   yelpREST.get("/autocomplete", {
//     params: {
//       location: "pdx",
//       text: "stumpt",
//     },
//   }).then(({ data }) => {
//     console.log(data)
//   })