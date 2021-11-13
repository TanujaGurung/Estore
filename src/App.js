import React from 'react'
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
//import Card from './components/Card'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist';
import SignIn from './components/SignIn'
import Products from './components/Products'
import Details from './components/Details'
import Footer from './components/Footer';
import SignUp from './components/SignUp'

function App() {
  return (
    <React.Fragment>
    
    <BrowserRouter>
    <Navbar/>
    <Route exact path='/' component={Products}></Route>
    <Route path='/details' component={Details}></Route>
    <Route path='/cart' component={Cart}></Route>
    <Route path='/wishlist' component={Wishlist}></Route>
    <Route path='/signup' component={SignUp}></Route>
    <Route path='/signin' component={SignIn}></Route>
    <Footer/>
    
    </BrowserRouter>
    
   
    </React.Fragment>
  );
}

export default App;
