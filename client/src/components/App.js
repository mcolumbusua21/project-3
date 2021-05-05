import React from "react";
import Signup from "./Signup";
// import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import SearchResultsPage from "../pages/SearchResultsPage"
import ProfilePage from "../pages/ProfilePage"
import SingleSearchPage from "../pages/SingleSearchPage"
import FavoritesPage from "../pages/FavoritesPage"

function App() {
  return (
    <div
      // className="d-flex align-items-center justify-content-center"
      // style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/search-results" component={SearchResultsPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/single-search" component={SingleSearchPage} />
              <Route path="/favorites" component={FavoritesPage} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
   
  );
}

export default App;
