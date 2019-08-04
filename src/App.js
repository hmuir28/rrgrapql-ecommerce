import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        setCurrentUser({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App"> 
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route 
            exact 
            path="/signin" 
            render={() => 
              this.props.currentUser ? 
              <Redirect to="/" /> : 
              <SignInAndSignUpPage />
            } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
