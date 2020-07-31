import React from 'react';

const BoardOfAdvisors = ({ className, ...props }) => {
	return <div {...props} id="boa" className={`ai-c flex flex-col ${className}`}>
		<h2>Board of Advisors</h2>
		<div className="mt-5 flex">
			<div className="relative m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h3 className="absolute c-light name">Dr. Tanri Abeng, MBA</h3>
			</div>
			<div className="relative m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h3 className="absolute c-light name">Dr. Tanri Abeng, MBA</h3>
			</div>
			<div className="relative m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h3 className="absolute c-light name">Dr. Tanri Abeng, MBA</h3>
			</div>
			<div className="relative m-5 flex flex-col w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h3 className="absolute c-light name">Dr. Tanri Abeng, MBA</h3>
			</div>
		</div>
		<button className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</button>
	</div>
}

export default BoardOfAdvisors