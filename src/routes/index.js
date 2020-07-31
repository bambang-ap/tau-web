import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = ({className}) => {
	return <div className={`flex flex-wrap w-full ${className}`}>
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</div>
}
export default Routes