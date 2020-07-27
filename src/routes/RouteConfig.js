import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from '../pages/Login';

const RouteConfig = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				fakeAuth.isAuthenticated === true ?
					<Component {...props} /> :
					<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
			}
		/>
	);
};

export default RouteConfig