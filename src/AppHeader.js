/**
 * 功能描述：Header组件
 * 2018-04-11
 * 作者：xiongmeng
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import { Avatar, Badge } from 'antd';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className={'header-info'}>
                    <p style={{ display: 'inline-block' }}>admin，欢迎登陆</p>
                    <span style={{ margin: '0 20px' }}>
                        <Badge count={1}>
                            <Avatar icon={'user'} shape={'circle'} />
                        </Badge>
                    </span>
                </div>
            </div>
        );
    }
}

export default AppHeader;

