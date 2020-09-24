import React from 'react';
import { useState } from 'react';
import { getGaleri, getManage } from 'src/utils/api';
import { useEffect } from 'react';
import { FILE_PATH } from '../../utils/api';
import ReactElasticCarousel from 'react-elastic-carousel';
import useWindowSize from 'src/utils/windowSize';
import Modal from 'src/components/Modal';


let carouselModalRef
const GaleriKegiatan = ({ className, staticContext, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [dataGaleri, setDataGaleri] = useState([])
	const [, screenHeight, isMobile] = useWindowSize()
	const [deskripsiGaleri, setDeskripsiGaleri] = useState('')
	const [visible, setVisible] = useState(false)
	const [indexShow, setIndexShow] = useState(false)
	const getData = async () => {
		const { status, data } = await getGaleri({ visible: true })
		const { status: statusManage, data: { content } } = await getManage({ part: 'galeri' })
		if (status) setDataGaleri(data)
		if (statusManage) setDeskripsiGaleri(content)
	}
	const Items = dataGaleri.rMap(({ is_embed, media, is_video }, index) => {
		const height = screenHeight - (screenHeight * 40 / 100)
		return <div style={visible ? { height } : { cursor: 'pointer' }}
			onClick={() => {
				if (!visible) {
					setVisible(true)
					setIndexShow(index)
				}
			}}
			className={`${visible ? 'flex jc-c' : 'h-65'} m-3 b-1 w-full content brd-3 o-h`}>
			{is_embed === '1' ?
				<iframe className="w-full h-full" src={media} title="embed-show" /> : is_video === '1' ?
					<video className={`as-c flex ${visible ? 'w-auto h-full' : 'h-auto w-full'}`} {...visible && { controls: true }}>
						<source src={FILE_PATH + media} />
					</video> : <img className={`as-c flex ${visible ? 'w-auto h-full' : 'h-auto w-full'}`} alt="" src={FILE_PATH + media} />}
			{/* <div className="p-3 pr-4 pl-4">
			<h5>{nama}</h5>
			<div>{deskripsi}</div>
		</div> */}
		</div>
	})
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <>
		<Modal className="jc-c ai-c" onClickBlack={() => setVisible(false)} visible={visible}>
			<div style={{ width: '80%', height: '80%' }} className="flex ai-c brd-3 bc-light p-5">
				<i style={{ cursor: 'pointer' }} className="p-5 f-10 fa fa-chevron-left" onClick={() => {
					if (carouselModalRef) {
						let idx = indexShow !== 0 ? indexShow - 1 : 0
						carouselModalRef.goTo(indexShow - 1)
						setIndexShow(idx)
					}
				}} />
				<ReactElasticCarousel ref={ref => carouselModalRef = ref} initialFirstItem={indexShow} className="p-5" focusOnSelect={false} showArrows={false} itemsToShow={1}>
					{Items}
				</ReactElasticCarousel>
				<i style={{ cursor: 'pointer' }} className="p-5 f-10 fa fa-chevron-right" onClick={() => {
					if (carouselModalRef) {
						let idx = indexShow !== dataGaleri.length - 1 ? indexShow + 1 : dataGaleri.length - 1
						carouselModalRef.goTo(indexShow + 1)
						setIndexShow(idx)
					}
				}} />
			</div>
		</Modal>
		<div {...props} id="galeri-kegiatan" className={`pt-3 pb-3 ai-c flex flex-col ${className}`}>
			<h4>Galeri Kegiatan</h4>
			<h5 className="p3 ta-c">{deskripsiGaleri + deskripsiGaleri + deskripsiGaleri}</h5>
			{isHome ? <ReactElasticCarousel focusOnSelect={false} showArrows={false} itemsToShow={isMobile ? 1 : 4}>
				{Items}
			</ReactElasticCarousel> : Items}
		</div>
	</>
}

export default GaleriKegiatan