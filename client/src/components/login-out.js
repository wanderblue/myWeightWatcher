import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import Jumbotron from "../components/JumbotronHome";

class Logout extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
  
        this.state = {
          loggedIn: false,
          username: null
        }
    }

  componentDidMount() {
  this.logout();
  }


  logout() {
    //event.preventDefault()
    console.log('logging out')
      axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
        console.log('logging out')
        this.setState({
            redirectTo: '/'
        })
// update the state to redirect to home

      }
    }).catch(error => {
        console.log('Logout error')
    
        // this.setState({
        //     redirectTo: '/'
        // })
    
    })
   
}


    render() {
            return (
   <>
                      <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />             
             <Jumbotron>
                <div>
                    <h4>Youve been logged out</h4>
                    <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Back home</span>
                                        </Link>
                        </section>
            
                </div>
                </Jumbotron>
     </>
            )
        }
    
}

export default Logout
