import React from 'react'

import { Router, Switch, Route, Redirect } from 'react-router'

import Login from '../components/login/Login'
import Register from '../components/register/Register'
import List from '../components/list/List'
import Edit from '../components/list/edit/Edit'
// import Register from '../pages/register'
// import Home from '../pages/home'
// import NotFound from './NotFound'
// import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={List} exact path="/listar"/>
            <Route path="/listar/editar/:id" children={<Edit />} />
            {/* <Route component={Edit} exact path="/list/edit"/> */}
            <Route component={Register} exact path="/cadastrar"/>
            
            {/*<PrivateRoute component={Home} exact path="/"/>*/}
            {/* <PrivateRoute component={NotFound}/>  */}
            <Redirect from="*" to="/login" />
        </Switch>
    </Router>
)

export default Routes
