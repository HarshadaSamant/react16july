import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import Cake from './Components/Cake';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import Search from './Components/Search';
import Loader from 'react-loader-spinner';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagenotfound from './Components/Pagenotfound';
import Home from './Components/Home';
import Cakedetails from './Components/Cakedetails';
import { useState } from 'react';
import Auth from './Components/Auth';
// As redux is a standalone library we need to just import it to use it.
// import "./ReduxStore/Store";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Order from './Components/Order';

function App() {
  const[isAutheticated, setisAutheticated] = useState(true);
  var [isUserLoggedIn, setUserLoggedIn] = useState(localStorage.token ? true : false);


  function loggedIn() {
    setisAutheticated(true);
    setUserLoggedIn(true);
  }
  function loggedOut() {
    setisAutheticated(false);
    setUserLoggedIn(false);
  }

  return (
    <div style={{height:"100vh"}}>
     <BrowserRouter>
      <Navbar isUserLoggedIn={isUserLoggedIn} loggedOut={loggedOut} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} ><Login loggedIn={loggedIn} /></Route>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/order" component={Order} />
        {/* <Route path="/cart" component={Auth} ><Auth component={Cart}></Auth></Route> */}
        <Route exact path="/cake/:cakeid" component ={Cakedetails} />
        <Route exact path="**" component={Pagenotfound} />
      </Switch>

     </BrowserRouter>

    </div>



  );
}

export default App;
