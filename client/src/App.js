import React, { Component } from 'react';
import axios from 'axios'
//import { Route, Link } from 'react-router-dom'

//import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import MyWatcher from "./pages/MyWatcher";
import MyWatcher1 from "./pages/MyWatcher1";
import ViewForm from "./components/ViewForm";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";

// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Logout from './components/login-out'
import Navbar from './components/navbar'
import Home from './components/home'
import WatchHome from './components/watchHome'
import "./App.css"

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import YourDashboard from "./views/YourDashboard/YourDashboard";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        {/* greet user if logged in:   
        {this.state.loggedIn &&
          <p>welcome, {this.state.username}!</p>
        }
      */}
        <Switch>
        <Route


          exact path="/myweight"
         
         render={(props) => <MyWatcher1 {...props} user={this.state.username} />}

            />


          <Route
          exact path="/gg"
         
         render={(props) => <MyWatcher1 {...props} user={this.state.username} />}

            />
 
 <Route exact path="/cc" component={YourDashboard} />


        <Route exact path="/logout" component={Logout} />
         <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />


          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
        
        
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
         
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
           <Route
          exact path="/logout"
          component={Home} />
</Switch>
      </div>
    );
  }
}

export default App;
