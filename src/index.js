import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import _ from 'lodash';
import './styles.css';

class App extends Component {
    onClick = () => {
        console.log('button clicked');
    }
    render() {
        let greeting = `Hi, welcome to my simple project😀 hhhhh`;
        console.log('done')
        return (
            <div>
                <h1>{greeting}</h1>
                <div><Button type="primary" onClick={this.onClick}>Click Here</Button></div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
