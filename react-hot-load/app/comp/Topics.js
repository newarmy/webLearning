import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Topic from './Topic';

export default class Topics extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${this.props.match.url}/rendering`} >
                        Rendering with React
                    </Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/component`} >
                        component
                    </Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/props-v-state`} >
                        props-v-state
                    </Link>
                </li>
            </ul>
            <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
            <Route path={this.props.match.url} exact={true} render={() => (<h3>please select a topic</h3>)}/>
        </div>);
    }
}