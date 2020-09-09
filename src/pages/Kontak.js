/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Input, Textarea } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { sendEmailKontak, getManage } from 'src/utils/api';

const Kontak = ({ className, ...props }) => {
	const [state, stateSet] = useState({})
	const [manage, setManage] = useState({})
	const setState = v => stateSet({ ...state, ...v })
	const sendEmail = async () => {
		try {
			const _resp = await sendEmailKontak(state)
			stateSet({})
		} catch (err) {
			stateSet({})
		}
	}
	const getData = async () => {
		const { status, data } = await getManage()
		if (status) setManage(
			data.reduce((parts, part) => {
				parts[part.part] = part.content
				return parts
			}, {})
		)
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [state])
	return <div {...props} id="kontak" className={`pt-3 ai-c c-light flex flex-col bc-blue ${className}`}>
		<div className="flex flex-wrap w-full">
			<div className="flex p-5 w-full xl:w-1/2">
				<iframe
					style={{ width: '100%', minHeight: 250 }}
					title="map-address"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					src="https://maps.google.com/maps?q=tanri%20abeng%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
				/>
			</div>
			<div className="p-5 flex flex-col w-full xl:w-1/2">
				<h5>Kontak kami</h5>
				<h5>{manage.kontakUnivName}</h5>
				<div>{manage.kontakAlamat}</div>
				<div className="flex jc-fs ai-c">
					<i className="fa fa-phone flex w-7" />
					<div className="flex">{manage.kontakPhone1} atau {manage.kontakPhone2}</div>
				</div>
				<div className="flex jc-fs ai-c">
					<i className="fa fa-envelope flex w-7" />
					<div className="flex">{manage.kontakEmail}</div>
				</div>
				<h5 className="mb-3">{manage.kontakDetailTitle}</h5>
				<div className="mb-3">{manage.kontakDetails}</div>
				<Input onBlur={e => setState({ name: e.target.value })} placeholder="Name" />
				<Input onBlur={e => setState({ email: e.target.value })} placeholder="Email" />
				<Textarea onBlur={e => setState({ comment: e.target.value })} placeholder="Comment or Questions" />
				<Button onClick={sendEmail} className="as-fs">KIRIM</Button>
			</div>
		</div>
	</div>
}

export default Kontak