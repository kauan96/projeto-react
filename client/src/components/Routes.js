import React from 'react'

import { Router, Switch, Route, Redirect } from 'react-router'

import Login from './login/Login'
// import Register from '../pages/register'
// import Home from '../pages/home'
// import NotFound from './NotFound'
// import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            {/* <Route component={Register} exact path="/register"/>
            <PrivateRoute component={Home} exact path="/"/>*/}
            {/* <PrivateRoute component={NotFound}/>  */}
            <Redirect from="*" to="/login" />
        </Switch>
    </Router>
)

export default Routes
