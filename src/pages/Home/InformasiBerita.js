import React from 'react';

const InformasiBerita = ({ className, ...props }) => {
	return <div {...props} id="boa" className={`ai-c flex flex-col ${className}`}>
		<h5>Informasi & Berita</h5>
		<div className="mt-5 flex">
			<div className="m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Artikel</h5>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Artikel</h5>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Artikel</h5>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Artikel</h5>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
		</div>
		{window.location.pathname.includes('/home') && <button className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</button>}
	</div>
}

export default InformasiBerita