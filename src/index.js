import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Typography } from 'antd';
import style from './styles.less';

const { Title } = Typography;

class App extends Component {
    render() {
        let greeting = `Hi 😀, this is my common webpack5 configuration for react projects.`;
        return (
            <div className={style['mainContainer']}>
                <Title>{greeting}</Title>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
