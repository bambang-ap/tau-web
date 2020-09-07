import React, { useState, useEffect } from 'react';
import { getManage, getStaff, FILE_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';
import useWindowSize from 'src/utils/windowSize';
import ReactElasticCarousel from 'react-elastic-carousel';

const StaffPengajar = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		const { data: manage } = await getManage({ part: 'staff' })
		const { data } = await getStaff()
		setState({ ...manage, data })
	}
	const Items = state.data.rMap(a => <div className={`flex o-h flex-col p-5 ${isHome ? '' : 'w-1/4'}`}>
		<img className="brd-3 h-50 w-auto as-c" alt="" src={FILE_PATH + a.foto} />
		<div className="mt-5">{a.nama}</div>
		<div className="as-fs c-link SemiBoldItalic">{a.jabatan}</div>
	</div>)

	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="staff-pengajar" className={`flex flex-wrap ${className}`}>
		{isHome && <div className={`flex ${isMobile ? 'w-full ai-c' : 'xl:w-1/4 ai-fs'} flex-col p-5`}>
			<h4>Staff & Pengajar</h4>
			<p className="mt-5 mb-5">{state.content}</p>
			<Link to="/akademik/staff" className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>
		</div>}
		{isHome ? <ReactElasticCarousel focusOnSelect={false}
			showArrows={false}
			className={`mt-3 mb-3 ${isHome ? isMobile ? 'w-full' : 'w-3/4' : 'w-full'}`}
			itemsToShow={isMobile ? 1 : 3}>
			{Items}
		</ReactElasticCarousel>
			: Items}
	</div>
}

export default StaffPengajar