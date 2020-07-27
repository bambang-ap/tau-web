import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteConfig from './RouteConfig';
import Login from '../pages/Login';
import Home, { Aaaa } from '../pages/Home';
import Category from '../pages/Category';
import Admin from '../pages/Admin';
import Products from '../pages/Products';
import Flexbox from 'flexbox-react';
import "./Route.scss"
import ScrollView from 'src/components/ScrollView';

const Routes = () => {
	return <Flexbox className="container" style={{ position: 'relative' }} flex="1">
		{/* <Switch>
			<Route path="/login" component={Login} />
			<Route exact path="/" component={Home} />
			<Route path="/category" component={Category} />
			<RouteConfig path="/admin" component={Admin} />
			<Route path="/products" component={Products} />
		</Switch> */}
		<Home />
	</Flexbox>
}
export default Routes