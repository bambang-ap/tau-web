import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteConfig from './RouteConfig';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Admin from '../pages/Admin';
import Products from '../pages/Products';

const Routes = () => {
	return <Switch>
		<Route path="/login" component={Login} />
		<Route exact path="/" component={Home} />
		<Route path="/category" component={Category} />
		<RouteConfig path="/admin" component={Admin} />
		<Route path="/products" component={Products} />
	</Switch>
}
export default Routes