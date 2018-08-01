import React, {Component} from 'react';
import Person from '../Person/Person';
import axios from 'axios';

class People extends Component {
    state = {
        people: []
    }

    // This gets the entire list of people from the StarWars API and sets it to state
    componentDidMount() {
        axios.get( `https://swapi.co/api/people` )
            .then( response => {
                this.setState({ people: response.data.results})
            })
    }

    render() {

        // This maps over the list of people on this.state, and sends the information of each individual
        // person to the Person component
        let mappedPeople = this.state.people.map( ( character, i ) => {
            return <Person key={i} personProp={character} />
        } )

        return (
            <div>
                <h1>People Component</h1>
                <div>{mappedPeople}</div> {/* This is where we are rendering the result of mapping over the people */}
            </div>
        )
    }
}

export default People;