/**
 * 功能描述：
 * 2018-04-11
 * 作者：Lenovo
 */
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import AppContent1 from "./AppContent1";
import AppContent2 from "./AppContent2";
import AppContent3 from "./AppContent3";

const routes = [
    {
        path: '/AppContent1',
        exact: true,
        main: () => <AppContent1/>
    },
    {
        path: '/AppContent2',
        main: () => <AppContent2/>
    },
    {
        path: '/AppContent3',
        main: () => <AppContent3/>
    }
];

class AppContent extends Component {
    render() {
        return (
            <div className={'content-bg'}>
                {
                    routes.map((route,index)=> (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))
                }
            </div>
        );
    }
}

export default AppContent;
