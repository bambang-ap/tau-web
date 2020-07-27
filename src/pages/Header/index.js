import './Header.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';

const Header = () => {
	return <Flexbox className="header" justifyContent="space-between">
		<Flexbox>
			<img />
		</Flexbox>
		<Flexbox>
			<Flexbox>
				<Link to="/">Homes</Link>
				<Link to="/category">Category</Link>
				<Link to="/products">Products</Link>
				<Link to="/admin">Admin area</Link>
			</Flexbox>
		</Flexbox>
	</Flexbox>
}

export default Header