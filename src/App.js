import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-sign-out/sign-in-sign-out.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    //subscriber
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
     this.setState({ currentUser:user});
    });
   
  }
  componentWillMount(){
    this.unsubscribeFromAuth();
  }
  render(){
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
  
}

export default App;
