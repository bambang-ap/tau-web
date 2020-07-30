import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return <div className="header flex flex-wrap w-full pl-20 pr-20">
		<div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-gray-500">
			<div className="p-3 w-1/2 bg-yellow-500" />
		</div>
		<div className="flex sm w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 bg-gray-400">
			<Link className="w-full ta-c as-c" to="/">Home</Link>
			<Link className="w-full ta-c as-c" to="/">Tentang TAU</Link>
			<Link className="w-full ta-c as-c" to="/">Akademik</Link>
			<Link className="w-full ta-c as-c" to="/">Fasilitas</Link>
			<Link className="w-full ta-c as-c" to="/">Pendaftaran</Link>
			<Link className="w-full ta-c as-c" to="/">Info & Berita</Link>
			<Link className="w-full ta-c as-c" to="/">TAU Training Center</Link>
		</div>
	</div>
}

export default Header