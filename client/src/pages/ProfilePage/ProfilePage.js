import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import './ProfilePage.css'
import Navbar from '../../components/Navbar'

function ProfilePage() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");
    
        try {
          await logout();
          history.push("/");
        } catch  {
          setError("Failed to log out");
        }
      }
    
    return (
        <>
        <Navbar />
        <Card className='profile-page'>
        <Card.Body style={{fontSize: '24px'}}>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger"> {error} </Alert>}
        <strong className="text-center mb-4"> Email:</strong> {currentUser && currentUser.email}
        <Link style={{background:'yellow', color:'blue'}}to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
         <Button  variant="link" onClick={handleLogout}>Log Out</Button>
         </div>
         </>
    )
}

export default ProfilePage
