import React from 'react';

const Kontak = ({ className, ...props }) => {
	return <div {...props} id="kontak" className={`pt-3 ai-c c-light flex flex-col bc-blue ${className}`}>
		<h5>Kontak kami</h5>
		<div className="flex flex-wrap">
			<div className="flex p-5 w-full xl:w-1/2">
				<iframe
					style={{ width: '100%', minHeight: 300 }}
					title="map-address"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					src="https://maps.google.com/maps?q=tanri%20abeng%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
				/>
			</div>
			<div className="p-5 w-full xl:w-1/2">
				<h5>Tanri Abeng University</h5>
				<div>Jl. Swadarma Raya No.58, Ulujami, Pesanggrahan, Jakarta Selatan - 12250</div>
				<div>
					<div className="flex jc-fs">
						<i className="fa fa-phone flex w-7" />
						<div className="flex">+62 21 5890 8888 atau (+62) 8123 729 0009</div>
					</div>
					<div className="flex jc-fs">
						<i className="fa fa-envelope flex w-7" />
						<div className="flex">addmission@tau.ac.id</div>
					</div>
				</div>
				<h5 className="mb-3">Your Details</h5>
				<div className="mb-3">Let us know how to get back to you. Feel free to ask a question or simply leave a comment.</div>
				<div>
					<div>
						<input placeholder="Name" className="brd-3 p-4 mr-3 w-full mb-3" />
						<input placeholder="Email" className="brd-3 p-4 w-full mb-3" />
					</div>
					<textarea placeholder="Comment or Questions" className="w-full brd-3 p-4 mb-3" />
					<button className="as-fs c-text bc-light brd-3 p-2 pr-10 pl-10">KIRIM</button>
				</div>
			</div>
		</div>
	</div>
}

export default Kontak