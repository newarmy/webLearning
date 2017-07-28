import React, {Component} from 'react';
export default class Topic extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.match.params);
        return <div style={{color: 'red', fontSize: '16px'}}>{this.props.match.params.topicId}</div>
    }
}