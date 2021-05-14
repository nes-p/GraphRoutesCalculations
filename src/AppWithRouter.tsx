import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import DeliveryCost from './modules/deliveryCost';
import Home from './modules/home/Home';
import Layout from './modules/layout/Layout';
import PossibleRoutes from './modules/possibleRoutes';
import LoadRoutes from './modules/routesLoader/LoadRoutes';

const AppWithRouter = withRouter((props) => (
    <Layout>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/loadroutes" exact={true} component={LoadRoutes} />
        <Route path="/case1" exact={true} component={DeliveryCost} />
        <Route path="/case2" exact={true} component={PossibleRoutes} />
    </Layout>
));

export default AppWithRouter;


