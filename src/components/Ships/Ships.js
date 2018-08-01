import React, { Component } from 'react';
import axios from 'axios';

class Ships extends Component {
    state = {
        ship: {}
    }

    // Each character has a list of URLs to major ships they have flown.
    // Each ship url is being passed here as props. In the componentDidMount,
    // we are getting that ship's info from Swapi
    componentDidMount() {
        axios.get( this.props.shipUrl )
            .then( response => {
                // Save ship data to state
                this.setState({ ship: response.data })
            } )
    }

    render() {
        const { name } = this.state.ship

        return (
            // Here we are displaying the name of the ship and turning it into a link
            // that redirects us to Wikipedia if it has a page matching the ship's name
            <a href={`http://en.wikipedia.org/wiki/${name}`} target='_blank'>
                <div>{name}</div>
            </a>
        )
    }
}

export default Ships;