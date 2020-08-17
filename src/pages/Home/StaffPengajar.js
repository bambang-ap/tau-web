import React, { useState, useEffect } from 'react';
import { getManage, getStaff, IMG_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';

const StaffPengajar = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data: manage } = await getManage({ part: 'staff' })
		const { data } = await getStaff()
		setState({ ...manage, data })
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="staff-pengajar" className={`flex flex-wrap ${className}`}>
		{(isHome ? state.data.filter((a, i) => i < 3) : state.data).rMap(a => <div className="flex w-1/4 flex-col p-5">
			<img className="brd-3" alt="" src={IMG_PATH + a.foto} />
			<div className="mt-5">{a.nama}</div>
			<div className="as-fs c-link SemiBoldItalic">{a.jabatan}</div>
		</div>)}
		{isHome && <div className="flex w-1/4 jc-c ai-fs flex-col p-5">
			<h4>Staff & Pengajar</h4>
			<p className="mt-5 mb-5">{state.content}</p>
			<Link onClick={'/akademik/staff'} className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>
		</div>}
	</div>
}

export default StaffPengajar