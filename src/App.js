import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Logout } from './components'

import { Home, SingleProduct, Cart, Checkout, Error, About, Products, PrivateRoute, SignupPage , LoginPage, LogoutPage} from './pages'
// import SignupPage from './pages/SignupPage';




function App() {
  return (
  <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>
    <Route exact path="/register">
        <SignupPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/logout" component={Logout}>
        
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/products/:id" children={<SingleProduct />}/>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route path="*">
        <Error />
      </Route>
      

    </Switch>
    <Footer />
  </Router>
  );
}

export default App
