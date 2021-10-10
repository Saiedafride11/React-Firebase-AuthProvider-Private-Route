import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./components/Context/AuthProvider";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
                <Route exact path="/"> 
                    <Home></Home>
                </Route>
                <Route path="/home"> 
                    <Home></Home>
                </Route>
                <PrivateRoute path="/shipping"> 
                    <Shipping></Shipping>
                </PrivateRoute>
                <PrivateRoute path="/placeorder"> 
                    <PlaceOrder></PlaceOrder>
                </PrivateRoute>
                <Route path="/register"> 
                    <Register></Register>
                </Route>
                <Route path="/login"> 
                    <LogIn></LogIn>
                </Route>
                <Route path="*"> 
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
