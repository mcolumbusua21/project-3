import React from "react";
import SignUp from "./SignUp";
// import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
// import SearchResultsPage from "../pages/SearchResultsPage"
import ProfilePage from "../pages/ProfilePage"
// import FavoritesPage from "../pages/FavoritesPage"

function App() {
  return (
 
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              {/* <Route path="/search-results" component={SearchResultsPage} /> */}
              <Route path="/profile" component={ProfilePage} />
              {/* <Route path="/favorites" component={FavoritesPage} /> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
