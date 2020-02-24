import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-sign-out/sign-in-sign-out.component';

// const HatsPage = () =>(
//   <div>
//    <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
 
    </div>
  );
}

export default App;
