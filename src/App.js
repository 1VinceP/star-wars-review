import React, { Component } from 'react';
import People from './components/People/People';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* This renders the People list! If you want to display other lists, this is a great place to add them */}
                <People />
            </div>
        );
    }
}

export default App;
