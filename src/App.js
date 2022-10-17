import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <React.Fragment>
        <Switch>
          <Route path="/home" exact={true} component={Home} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/login" exact={true} component={Login} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
