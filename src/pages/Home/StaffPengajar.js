import React from 'react';

const StaffPengajar = ({ className, ...props }) => {
	return <div {...props} id="staff-pengajar" className={`flex ${className}`}>
		<div className="flex flex-col p-5">
			<img className="brd-3" alt="" src={require('src/assets/images/1-1.jpg')} />
			<div className="mt-5">Dr. Tanri Abeng, MBA</div>
			<div className="as-fs c-link SemiBoldItalic">Rector TANRI ABENG UNIVERSITY</div>
		</div>
		<div className="flex flex-col p-5">
			<img className="brd-3" alt="" src={require('src/assets/images/1-1.jpg')} />
			<div className="mt-5">Dr. Tanri Abeng, MBA</div>
			<div className="as-fs c-link SemiBoldItalic">Rector TANRI ABENG UNIVERSITY</div>
		</div>
		<div className="flex flex-col p-5">
			<img className="brd-3" alt="" src={require('src/assets/images/1-1.jpg')} />
			<div className="mt-5">Dr. Tanri Abeng, MBA</div>
			<div className="as-fs c-link SemiBoldItalic">Rector TANRI ABENG UNIVERSITY</div>
		</div>
		<div className="flex jc-c ai-fs flex-col p-5">
			<h4>Staff & Pengajar</h4>
			<p className="mt-5 mb-5">Cillum duis anim qui aliquip laborum cupidatat fugiat anim incididunt sint reprehenderit elit occaecat sint.Excepteur minim Lorem id et aute veniam sunt adipisicing ex adipisicing ipsum nostrud.</p>
			<button className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</button>
		</div>
	</div>
}

export default StaffPengajar