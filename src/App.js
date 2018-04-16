import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import AppHeader from './AppHeader';
import AppSider from "./AppSider";
import AppContent from "./AppContent";

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <Header className={'App-header'}>
                    <AppHeader/>
                </Header>
                <Layout>
                    <Sider>
                        <AppSider/>
                    </Sider>
                    <Layout className={'App-bg'}>
                        <Content>
                            <AppContent/>
                        </Content>
                        <Footer style={{textAlign:'center'}}>
                            <p>react &copy; 2018</p>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;
