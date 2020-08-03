import React from 'react';

const GaleriKegiatan = ({ className, staticContext, ...props }) => {
	return <div {...props} id="galeri-kegiatan" className={`ai-c flex flex-col ${className}`}>
		<h4>Galeri Kegiatan</h4>
		<h5 className="mt-5 mb-5">Program studi terbaik yang sudah terakreditasi</h5>
		<div className="mt-5 flex">
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
		</div>
		<div className="mt-5 flex">
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
			<div className="m-7 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h5>Foto / Video</h5>
					<div>Lorem ipsum dolor sit amet</div>
				</div>
			</div>
		</div>
	</div>
}

export default GaleriKegiatan