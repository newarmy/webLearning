
import React from 'react';
import Home from './comp/Home';
import About from './comp/About';
import Topics from './comp/Topics';
import {BrowserRouter as Router, Route, Link, } from 'react-router-dom';
export  default class Main extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}