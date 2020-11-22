import React, { useState, useEffect } from 'react';
import { getManage, getStaff, FILE_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';
import useWindowSize from 'src/utils/windowSize';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import { btnClass } from 'src/utils/paths';
import Image from 'src/components/Image';

const StaffPengajar = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		const { data: manage } = await getManage({ part: 'staff' })
		const { data } = await getStaff()
		setState({ ...manage, data })
	}
	const Items = state.data.rMap(a => <div className={`o-h p-5 ${isHome ? '' : 'w-1/4'}`}>
		<div className="shadow-md brd-3 h-auto w-full as-c o-h">
			<Image className="zoom" alt="" src={FILE_PATH + a.foto} />
		</div>
		<div className="mt-5">{a.nama}</div>
		<div className="as-fs c-link SemiBoldItalic">{a.jabatan}</div>
	</div>)

	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="staff-pengajar" className={`flex flex-wrap ${className}`}>
		{isHome ? <ReactElasticCarousel length={Items.length} focusOnSelect={false}
			showArrows={true}
			className={`mt-3 mb-3 ${isHome ? isMobile ? 'w-full' : 'w-3/4' : 'w-full'}`}
			itemsToShow={isMobile ? 1 : 3}>
			{Items}
		</ReactElasticCarousel>
			: Items}
		{isHome && <div className={`flex ${isMobile ? 'w-full ai-c' : 'xl:w-1/4 as-c'} flex-col p-5`}>
			<h4>Staff & Pengajar</h4>
			<p className="mt-5 mb-5">{state.content}</p>
			<Link to="/akademik/staff" className={`${!isMobile && 'as-fs'} ${btnClass} bc-light`}>Lihat Semua</Link>
		</div>}
	</div>
}

export default StaffPengajar