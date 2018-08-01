import React, { Component } from 'react';
import Ships from '../Ships/Ships';

class Person extends Component {
    state = {
        viewShips: false
    }

    // This just shows the information we are receiving on props as soon as the component mounts
    componentDidMount() {
        console.log( this.props.personProp )
    }

    // When the button is clicked, it toggles the value on state on and off. This toggle determines if we should
    // display the character's ships or not
    handleClick() {
        this.setState({ viewShips: !this.state.viewShips })
    }

    render() {
        // Destructuring only the properties we need from the props we are given
        const { name, eye_color, hair_color, starships } = this.props.personProp

        // Here we map over the starships linked to the character, and send individual starship data to our Ships component
        let mappedShips = starships.map( ( ship, i ) => {
            return <Ships key={i} shipUrl={ship} />
        } )

        return (
            <div>
                <div>Name: {name}</div>
                <div>Eyes: {eye_color}</div>
                <div>Hair: {hair_color}</div>
                <button onClick={() => this.handleClick()}>Starships</button> {/* this toggles the ships on and off */}
                { this.state.viewShips
                    && mappedShips // This is where we are conditionally rendering our Ship components. In this case,
                                   // the && says "if the first thing is true, display the second thing"
                }
                <hr/> {/* This creates a line break and a divider line between each person */}
            </div>
        )
    }
}

export default Person;