import React from 'react';

const Banner = ({ className = "", ...props }) => {
	return <button {...props} id="banner" className={`flex flex-col ${className}`}>
		<button className="flex p-3 pl-10 pr-10 bc-grey-hard c-light f-20">
			<button className="f-4 flex flex-1 jc-fs">+62 21 5890 8888 atau (+62) 8123 729 0009</button>
			<button className="f-4 flex flex-1 jc-c">Sistem Informasi Akademik</button>
			<button className="f-4 flex flex-1 jc-fe ai-c">
				<i className="f-6 ml-5 fa fa-instagram" />
				<i className="f-6 ml-5 fa fa-facebook-square" />
				<i className="f-6 ml-5 fa fa-twitter-square" />
			</button>
		</button>
		<button className="">
			<img className="" alt="" src={require('src/assets/images/banner.png')} />
		</button>
	</button>
}

export default Banner