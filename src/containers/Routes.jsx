import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../components/login/Login'
import Register from '../components/register/Register'
import RegisterDragon from '../components/register-dragon/RegisterDragon'
import List from '../components/list/List'
import Detail from '../components/detail/Detail'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render = { props => sessionStorage.getItem("app-token") ? 
        ( <Component {...props} /> ) : 
        ( <Redirect to={{ pathname: "/", state: { from: props.location } }} /> ) } />
  );

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/cadastro" component={Register} />
            <PrivateRoute exact path="/listar" component={List} />
            <PrivateRoute exact path="/cadastro-dragao" component={RegisterDragon} />
            <PrivateRoute exact path="/detalhe/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Routes
