import React from 'react';
import Product from '../pages/Product';
import { Route } from 'react-router-dom';

const ProductRoute = ({ match, data }) => {
	return <div>
		<Route
			path={`${match.url}/:productId`}
			render={props => <Product data={data} {...props} />}
		/>
		<Route
			exact
			path={match.url}
			render={() => (
				<div className="wow" style={{ textAlign: "center" }}>Please select a product.</div>
			)}
		/></div>
}

export default ProductRoute