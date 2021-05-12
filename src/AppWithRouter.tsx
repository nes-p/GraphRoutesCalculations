import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import DeliveryCost from './modules/deliveryCost';
import Home from './modules/home/Home';
import Layout from './modules/layout/Layout';
import LoadRoutes from './modules/routesLoader/LoadRoutes';

const AppWithRouter = withRouter((props) => (
    <Layout>
        <Route path="/" exact={true} component={Home} />
        <Route path="/loadroutes" exact={true} component={LoadRoutes} />
        <Route path="/case1" exact={true} component={DeliveryCost} />
    </Layout>
));

export default AppWithRouter;


