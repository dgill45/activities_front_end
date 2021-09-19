import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import NavBar from "./components/NavBar";
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path = '/activities/:id'>
          <ActivityDetails />
        </Route>
        <Route path = "/activities">
          <ActivitiesPage />
        </Route>
        <Route path = '/users/:id'>
          <UserDetails />
        </Route>
        <Route path = "/users">
          <UsersPage />
        </Route>
        <Route path = "*">
          <h1>404 Not Found</h1>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
