/**
 * 功能描述：
 * 2018-04-11
 * 作者：Lenovo
 */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class AppSider extends Component {

  render() {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode={'inline'}
            theme={'dark'}
        >
            <Menu.Item key={'1'} style={{marginTop:'0'}}>
                <Link to={'/AppContent1'}>
                    <Icon type={'desktop'} />
                    <span>Menu1</span>
                </Link>
            </Menu.Item>
            <Menu.Item key={'2'}>
                <Link to={'/AppContent2'}>
                    <Icon type={'inbox'} />
                    <span>Menu2</span>
                </Link>
            </Menu.Item>
            <Menu.Item key={'3'}>
                <Link to={'/AppContent3'}>
                    <Icon type={'mail'} />
                    <span>Menu3</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
  }
}
