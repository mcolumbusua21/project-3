import React, { useState, useEffect } from "react";
import { getDispensaries } from "../utils/API";

function SearchResults(){
 const [results, setResults] = useState([])
 const [resultObject, setResultObject] = useState({})

 useEffect(() => {
     loadSearchResults()
 },[])

 function loadResults(){
     getDispensaries.getSearchResults()
     .then(res =>
        setSearchResults(res.data)
        )
        .catch(err => console.log(err));
 };

 function handleInputChange(e){
     const { name, value } = e.target;
     setResultObject({...resultObject, [name]: value})
 };

 function handleFormSubmit(e){
     e.preventDefault();
     if(resultObject.businesses){
         getDispensaries.saveSearchResults({
         name: resultObject.name,
         location: resultObject.location.display_location,
         phone: resultObject.display_phone,
         open: resultObject.is_open,
         rating: resultObject.rating,
     })
     .then(res => loadSearchResults())
     .catch(err => console.log(err));
    }
 };

 return(
 <div>
     <h1>Dispensaries Near Here</h1>
 </div>
 )
}