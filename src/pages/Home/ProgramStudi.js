import React from 'react';

const ProgramStudi = ({ className, ...props }) => {
	return <div {...props} id="program-studi" className={`ai-c flex flex-col ${className}`}>
		<h2>Program Studi</h2>
		<h3 className="mt-5 mb-5">Program studi terbaik yang sudah terakreditasi</h3>
		<button className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</button>
		<div className="mt-5 flex">
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
		</div>
		<div className="mt-5 flex">
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
			<div className="flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<div className="p-3 pr-4 pl-4">
					<h3>Jurusan</h3>
					<div>Lorem ipsum dolor sit amet</div>
					<button className="as-fs c-link">baca selengkapnya &gt;</button>
				</div>
			</div>
		</div>
	</div>
}

export default ProgramStudi