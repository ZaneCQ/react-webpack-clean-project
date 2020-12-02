import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

class App extends Component {
    onClick = () => {
        console.log('button clicked')
    }
    render() {
        let greeting = `Hi, welcome to my simple project😀`;
        console.log('done')
        return (
            <div>
                <h1>{greeting}</h1>
                <div><Button onClick={this.onClick}>Click</Button></div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
/* if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
} */
