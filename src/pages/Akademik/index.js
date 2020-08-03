import React from 'react';
import Banner from '../Home/Banner';
import { Link } from 'react-router-dom';

const Akademik = () => {
	const tabs = [
		["/tentang/sejarah", "Sejarah TAU"],
		["/tentang/visi", "Visi & Misi"],
		["/tentang/struktur", "Struktur Organisasi"],
		["/tentang/sertifikasi", "Sertifikasi Akreditas"]
	]
	return <div id="tentang" className="flex flex-1">
		{/* <Banner /> */}
		{tabs.map(([path, name], i) =>
			<Link key={i} to={path} className={`${window.location.href.includes(path) && 'active'} tab p-3 jc-c flex flex-1`} >{name}</Link>
		)}
	</div>
}

export default Akademik
