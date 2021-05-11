import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './modules/home/Home';
import LoadRoutes from './modules/inputRouts/LoadRoutes';
import Layout from './modules/layout/Layout';

const AppWithRouter = withRouter((props) => (
    <Layout>
        <Route path="/" exact={true} component={Home} />
        <Route path="/loadroutes" exact={true} component={LoadRoutes} />
    </Layout>
));

export default AppWithRouter;


