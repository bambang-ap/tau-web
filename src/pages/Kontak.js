import React from 'react';

const Kontak = ({ className, ...props }) => {
	return <div {...props} id="kontak" className={`flex bc-blue ${className}`}>
		<div className="c-light flex">
			<div className="flex w-1/2">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
			</div>
			<div className="flex flex-col ml-10 w-1/2">
				<h5 className="mb-3">Kontak Kami</h5>
				<h5 className="mb-3">Tanri Abeng University</h5>
				<div className="mb-3">Jl. Swadarma Raya No.58, Ulujami, Pesanggrahan, Jakarta Selatan - 12250</div>
				<div className="mb-3 flex jc-fs ai-c">
					<i className="fa fa-phone flex w-7" />
					<div className="flex">+62 21 5890 8888 atau (+62) 8123 729 0009</div>
				</div>
				<div className="mb-3 flex jc-fs ai-c">
					<i className="fa fa-envelope flex w-7" />
					<div className="flex">addmission@tau.ac.id</div>
				</div>
				<h5 className="mb-3">Your Details</h5>
				<div className="mb-3">Let us know how to get back to you. Feel free to ask a question or simply leave a comment.</div>
				<div className="flex flex-col">
					<div className="flex mb-3">
						<input placeholder="Name" className="brd-3 p-4 mr-3 flex-1" />
						<input placeholder="Email" className="brd-3 p-4 flex-1" />
					</div>
					<textarea placeholder="Comment or Questions" className="brd-3 p-4 mb-3" />
					<button className="as-fs c-text bc-light brd-3 p-2 pr-10 pl-10">KIRIM</button>
				</div>
			</div>
		</div>
	</div>
}

export default Kontak