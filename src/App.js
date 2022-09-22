import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Header2 from './Header2';
import Collections from './Collections';
import Shop from './Shop';
import Stickers from './Stickers';
import Footer from './Footer';
import Home from './Home';
import Home2 from './Home2';
import ProductPage from "./ProductPage";
import Contact from './Contact';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



const promise = loadStripe('pk_test_51I4QOCAuUvW4lOB5c1inBcmp0HPRbF0ZrmAaVsOS7o4Ua7ToOjMeAyJSexwsmT8LLDy8YKuiNzvwVuKsCSQhVglO00yR1ef8nX');

function App() {
  const [{}, dispatch] = useStateValue();

 

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      
      if (authUser) {
        PrivateRoute(auth);
        auth.isAuthenticated = true;
        console.log("the user is", auth)

        dispatch({
          type: 'SET_USER',
          user: authUser
        })


      } else {
        PrivateRoute(auth);
        auth.isAuthenticated = false;
        console.log("the user is", auth)

        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, [])

  function PrivateRoute({ children, ...rest }) {
    
    console.log("the user is", auth)
    return (
      
      <Route {...rest} render={() => {
        return auth.isAuthenticated === true
          ? children
          : <Redirect to='/login' />
      }} />
    )
  }
  

  

  return (

    <Router>

      <div className="app">
        <Switch>
        <Route path="/test">
            <Header />
            <Home />
          </Route>
          <Route path="/orders">
            <Header2 />
            <Orders />
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <PrivateRoute path="/checkout">
            <Header2 />
            <Checkout />
          </PrivateRoute>
          <Route path="/payment">
            <Header2 />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
         </Route>
         <Route path="/contact">
          <Header2 />
          <Contact />
          <Footer />
         </Route>
         <Route path="/productpage">
          <Header2 />
          <ProductPage />
         </Route>
         <Route path="/shop">
          <Header2 />
          <Shop />
          <Footer />
         </Route>
          <Route path="/collections">
            <Header2 />
            <Collections />
            <Footer />
         </Route>
         <Route path="/stickers">
          <Header2 />
          <Stickers />
          <Footer />
         </Route>
            <Route path="/">
              <Home2 />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
