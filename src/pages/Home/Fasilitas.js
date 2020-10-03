import React, { useEffect, useState } from 'react';
import { getFacilities, getManage, FILE_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import useWindowSize from 'src/utils/windowSize';
import { btnClass } from 'src/utils/paths';

const Fasilitas = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data } = await getFacilities()
		const { data: manage } = await getManage({ part: 'fasilitas' })
		setState({ ...manage, data })
	}
	const [, , isMobile] = useWindowSize()
	const effect = () => {
		getData()
	}

	useEffect(effect, [])
	const Items = state.data.rMap(a => <div className={`${isHome ? '' : isMobile ? 'w-full' : 'w-1/4'} flex flex-col p-5`}>
		<div className="h-50 zoom w-auto as-c brd-3 o-h">
			<img className="zoom" alt="" src={FILE_PATH + a.foto} />
		</div>
		<div className="mt-5">{a.nama}</div>
	</div>)
	return <div {...props} id="fasilitas" className={`pb-3 flex flex-wrap jc-c ${className}`}>
		{isHome && <div className={`flex jc-c ${isMobile ? 'w-full ai-c' : 'w-1/4 ai-fs'} flex-col p-5`}>
			<h4 onClick={() => console.log(state)}>Fasilitas</h4>
			<p className={`mt-5 mb-5 ${isMobile ? 'ta-c' : 'ta-l'}`}>{state.content}</p>
			<Link to={'/fasilitas'} className={`bc-light ${btnClass}`}>Lihat Semua</Link>
		</div>}
		{isHome ? <ReactElasticCarousel length={state.data.length} focusOnSelect={false}
			preventDefaultTouchmoveEvent
			className={isMobile ? "w-full" : "w-3/4"}
			itemsToShow={isMobile ? 1 : 3}
			showArrows={true}>
			{Items}
		</ReactElasticCarousel> : Items}
	</div>
}

export default Fasilitas