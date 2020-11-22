import React, { useEffect, useState } from 'react';
import { getFacilities, getManage, FILE_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import useWindowSize from 'src/utils/windowSize';
import { btnClass } from 'src/utils/paths';
import Image from 'src/components/Image';
import Modal from 'src/components/Modal';

const Fasilitas = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data } = await getFacilities()
		const { data: manage } = await getManage({ part: 'fasilitas' })
		setState({ ...manage, data })
	}
	const [, screenHeight, isMobile] = useWindowSize()
	const effect = () => {
		getData()
	}
	const [visible, setVisible] = useState(false)
	const [indexShow, setIndexShow] = useState(false)

	useEffect(effect, [])
	const Items = state.data.rMap((a, index) => {
		const height = screenHeight - (screenHeight * 40 / 100)
		return <div onClick={() => {
			if (!visible) {
				setVisible(true)
				setIndexShow(index)
			}
		}} style={visible ? { height } : { cursor: 'pointer' }} className={`${isHome ? '' : isMobile ? 'w-full' : 'w-1/4'} flex flex-col p-5`}>
			<div className="h-50 zoom w-auto as-c brd-3 o-h">
				<Image className="zoom" alt="" src={FILE_PATH + a.foto} />
			</div>
			<div className="mt-5">{a.nama}</div>
		</div>
	})
	return <div {...props} id="fasilitas" className={`pb-3 flex flex-wrap jc-c ${className}`}>
		<Modal className="jc-c ai-c" onClickBlack={() => setVisible(false)} visible={visible}>
			<div style={isMobile ? { width: '100%' } : { width: '80%', height: '80%' }} className="flex ai-c brd-3 bc-light p-5">
				<ReactElasticCarousel length={Items.length} initialFirstItem={indexShow} className="p-5" focusOnSelect={false} showArrows={true} itemsToShow={1}>
					{Items}
				</ReactElasticCarousel>
			</div>
		</Modal>
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