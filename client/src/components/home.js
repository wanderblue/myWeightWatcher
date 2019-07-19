import React, { Component } from 'react'
import Jumbotron from "../components/JumbotronHome";
import Footer from "../components/Footer";
import Navbar from '../components/navbar'
import axios from 'axios'
class Home extends Component {

    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null
        }
    }
    render() {
        const imageStyle = {
            width: 400
        }
        return (

               <>
             <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            <Jumbotron />
            <Footer />
        </>

        )

    }
}

export default Home
