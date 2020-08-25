import React from 'react';

const BoardOfAdvisors = ({ className,staticContext, ...props }) => {
	return <div {...props} id="boa" className={`ai-c flex flex-col pt-3 pb-3 ${className}`}>
		<h4>Board of Advisors</h4>
		<div className="mt-5 flex flex-wrap">
			<div className="relative flex flex-col w-full m-3 xl:w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h5 className="absolute c-light name">Dr. Tanri Abeng, MBA</h5>
			</div>
			<div className="relative flex flex-col w-full m-3 xl:w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h5 className="absolute c-light name">Dr. Tanri Abeng, MBA</h5>
			</div>
			<div className="relative flex flex-col w-full m-3 xl:w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h5 className="absolute c-light name">Dr. Tanri Abeng, MBA</h5>
			</div>
			<div className="relative flex flex-col w-full m-3 xl:w-1/4 b-1 content brd-3 o-h">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
				<h5 className="absolute c-light name">Dr. Tanri Abeng, MBA</h5>
			</div>
		</div>
		<button className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</button>
	</div>
}

export default BoardOfAdvisors