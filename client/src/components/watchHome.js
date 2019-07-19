import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron1";
import Footer from "../components/Footer";

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (

               <>
            <Jumbotron />
            <Footer />
        </>

        )

    }
}

export default Home
