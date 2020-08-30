import React from 'react';
import { Input, Textarea } from 'src/components/Input';
import { Button } from 'src/components/Button';

const Kontak = ({ className, ...props }) => {
	return <div {...props} id="kontak" className={`pt-3 ai-c c-light flex flex-col bc-blue ${className}`}>
		<h5>Kontak kami</h5>
		<div className="flex flex-wrap">
			<div className="flex p-5 w-full xl:w-1/2">
				<iframe
					style={{ width: '100%', minHeight: 300 }}
					title="map-address"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					src="https://maps.google.com/maps?q=tanri%20abeng%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
				/>
			</div>
			<div className="p-5 flex flex-col w-full xl:w-1/2">
				<h5>Tanri Abeng University</h5>
				<div>Jl. Swadarma Raya No.58, Ulujami, Pesanggrahan, Jakarta Selatan - 12250</div>
				<div className="flex jc-fs ai-c">
					<i className="fa fa-phone flex w-7" />
					<div className="flex">+62 21 5890 8888 atau (+62) 8123 729 0009</div>
				</div>
				<div className="flex jc-fs ai-c">
					<i className="fa fa-envelope flex w-7" />
					<div className="flex">addmission@tau.ac.id</div>
				</div>
				<h5 className="mb-3">Your Details</h5>
				<div className="mb-3">Let us know how to get back to you. Feel free to ask a question or simply leave a comment.</div>
				<Input placeholder="Name" />
				<Input placeholder="Email" />
				<Textarea placeholder="Comment or Questions" />
				<Button className="as-fs">KIRIM</Button>
			</div>
		</div>
	</div>
}

export default Kontak