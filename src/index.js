import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import style from './styles.less';

class App extends Component {
    onClick = () => {
        console.log('button clicked');
    }
    render() {
        let greeting = `Hi, welcome to my simple project😀 hhhhh`;
        console.log('done');
        return (
            <div className={style['mainContainer']}>
                <h1 className="normalColor">{greeting}</h1>
                <div><Button type="primary" onClick={this.onClick}>Click Here</Button></div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
