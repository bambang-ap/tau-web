import React, { useEffect, useState } from 'react';
import { getFacilities, getManage, FILE_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';
import ReactElasticCarousel from 'react-elastic-carousel';
import useWindowSize from 'src/utils/windowSize';

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
	const Items = state.data.rMap(a => <div className={`flex ${isHome ? '' : isMobile ? 'w-full' : 'w-1/4'} o-h flex-col p-5`}>
		<img className="h-50 w-auto as-c brd-3" alt="" src={FILE_PATH + a.foto} />
		<div className="mt-5">{a.nama}</div>
	</div>)
	return <div {...props} id="fasilitas" className={`pb-3 flex flex-wrap jc-c ${className}`}>
		{isHome && <div className={`flex jc-c ${isMobile ? 'w-full ai-c' : 'w-1/4 ai-fs'} flex-col p-5`}>
			<h4 onClick={() => console.log(state)}>Fasilitas</h4>
			<p className={`mt-5 mb-5 ${isMobile ? 'ta-c' : 'ta-l'}`}>{state.content}</p>
			<Link to={'/fasilitas'} className="b-1 p-2 pl-10 pr-10 brd-1 bc-light">Lihat Semua</Link>
		</div>}
		{isHome ? <ReactElasticCarousel focusOnSelect={false}
			preventDefaultTouchmoveEvent
			className={isMobile ? "w-full" : "w-3/4"}
			itemsToShow={isMobile ? 1 : 3}
			showArrows={false}>
			{Items}
		</ReactElasticCarousel> : Items}
	</div>
}

export default Fasilitas