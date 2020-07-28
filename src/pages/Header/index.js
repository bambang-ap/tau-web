import './Header.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const Header = () => {
	return <Flexbox className="header" justifyContent="space-between">
		<Flexbox flex="1" style={{ margin: '.5rem', padding: '2rem', backgroundColor: 'blue' }} />
		<Flexbox>
			<Flexbox className="nav-bar">
				<Link to="/">Home</Link>
				<Link to="/">Tentang TAU</Link>
				<Link to="/">Akademik</Link>
				<Link to="/">Fasilitas</Link>
				<Link to="/">Pendaftaran</Link>
				<Link to="/">Info & Berita</Link>
				<Link to="/">TAU Training Center</Link>
			</Flexbox>
		</Flexbox>
	</Flexbox>
}

export default Header