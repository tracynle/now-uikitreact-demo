import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/views/examples/Home'


class App extends Component {
    render() {
        return (
            <div>
               <Home/>
            </div>
        );
    }
}

export default App;
