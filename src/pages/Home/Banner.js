import React from 'react';

const Banner = ({ className = "", ...props }) => {
	return <div {...props} id="banner" className={`flex flex-col ${className}`}>
		<div className="flex flex-wrap p-3 pl-10 pr-10 bc-grey-hard c-light f-20">
			<div className="f-4 flex xl:w-1/3 jc-fs">+62 21 5890 8888 atau (+62) 8123 729 0009</div>
			<div className="f-4 flex xl:w-1/3 jc-c">Sistem Informasi Akademik</div>
			<div className="f-4 flex xl:w-1/3 jc-fe ai-c">
				<i className="f-6 ml-5 fa fa-instagram" />
				<i className="f-6 ml-5 fa fa-facebook-square" />
				<i className="f-6 ml-5 fa fa-twitter-square" />
			</div>
		</div>
		<div className="">
			<img className="" alt="" src={require('src/assets/images/banner.png')} />
		</div>
	</div>
}

export default Banner