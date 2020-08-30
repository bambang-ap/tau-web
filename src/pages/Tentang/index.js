import React from 'react';
import { Link } from 'react-router-dom';

const Tentanghdjk = () => {
	const tabs = [
		["/tentang/sejarah", "Sejarah TAU"],
		["/tentang/visi", "Visi & Misi"],
		["/tentang/struktur", "Struktur Organisasi"],
		["/tentang/sertifikasi", "Sertifikasi Akreditas"]
	]
	return <div id="tentang" className="flex flex-1">
		{tabs.map(([path, name], i) =>
			<Link key={i} to={path} className={`${window.location.href.includes(path) && 'active'} tab p-3 jc-c flex flex-1`} >{name}</Link>
		)}
		<div className="flex flex-1 flex-col p-5">
			Eu ipsum ut fugiat ea.Mollit ea cillum adipisicing veniam velit. Elit eu proident occaecat ex nisi consectetur aute reprehenderit dolor consequat velit esse minim labore. Lorem laboris ullamco ut ipsum ex cillum officia est adipisicing aute.
	</div>
	</div>
}

export default Tentanghdjk
