// import React from 'react'
// import './SearchResults.css'
// import Store2 from '../../assets/images/store.jpg'
// import Dashboard from "./Dashboard"

// function () {
//     return (
//         <div className='store'>
//         <img className='cover' src={Store2} />
            
//         </div>
//     )
// }

// import React, { useState, useEffect } from "react";
// import { getDispensaries } from "../utils/API";
// import { Col, Row, Card, ListGroup } from "react-bootstrap";
// import Formfiller from "../components/Form/index"

// function SearchResults() {
//   const [results, setResults] = useState([]);
//   const [resultObject, setResultObject] = useState({});

//   useEffect(() => {
//     loadSearchResults();
//   }, []);

//   function loadResults() {
//     getDispensaries
//       .getSearchResults()
//       .then((res) => setSearchResults(res.data))
//       .catch((err) => console.log(err));
//   }

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setResultObject({ ...resultObject, [name]: value });
//   }

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     if (resultObject.businesses) {
//       getDispensaries
//         .saveSearchResults({
//           name: resultObject.name,
//           location: resultObject.location.display_location,
//           phone: resultObject.display_phone,
//           open: resultObject.is_open,
//           rating: resultObject.rating,
//         })
//         .then((res) => loadSearchResults())
//         .catch((err) => console.log(err));
//     }
//   }

//   return (
//     <div>
//       <h1>Dispensaries Near Here</h1>
//       <Row>
//         <Col size="md-6">
//           <ListGroup>
//               {results.map(results => (
//                   <ListItem key={results}></ListItem>
//               ))}
//             <Card>
//               <Card.Body>
//                 <Card.Title>{results.name}</Card.Title>
//                 <Card.Text>
//                   {results.location} {results.phone} {results.open}{" "}
//                   {results.rating}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </ListGroup>
//         </Col>
//       </Row>
//     </div>
//   );
// }
// export default SearchResults;

