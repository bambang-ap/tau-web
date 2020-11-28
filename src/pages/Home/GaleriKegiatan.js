import React from 'react';
import { useState } from 'react';
import { getGaleri, getManage } from 'src/utils/api';
import { useEffect } from 'react';
import { FILE_PATH } from '../../utils/api';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import useWindowSize from 'src/utils/windowSize';
import Modal from 'src/components/Modal';
import Image from 'src/components/Image';

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
	useEffect(() => {
		document.querySelector('body').style.overflow = visible ? 'hidden' : ''
	}, [visible])
	const Items = dataGaleri.rMap(({ is_embed, media, is_video }, index) => {
		const height = screenHeight - (screenHeight * 40 / 100)
		return visible ? <Image nativeImage={visible} style={{ height }} className="w-auto" alt="" src={FILE_PATH + media} /> :
			<div style={visible ? { height } : { cursor: 'pointer' }}
				onClick={() => {
					if (!visible) {
						setVisible(true)
						setIndexShow(index)
					}
				}}
				className={`${visible ? 'flex jc-c' : 'h-50'} m-3 w-full content o-h`}>
				{is_embed === '1' ?
					<iframe className="b-1 brd-3 w-full h-full" src={media} title="embed-show" /> : is_video === '1' ?
						<video className={`b-1 brd-3 as-c flex ${visible ? 'w-auto h-full' : 'h-auto w-full'}`} {...visible && { controls: true }}>
							<source src={FILE_PATH + media} />
						</video> :
						<div className={`b-1 brd-3 o-h ${visible ? 'w-auto h-full' : 'h-auto w-full'}`}>
							<Image
								className={`as-c flex ${visible ? '' : 'zoom'}`}
								alt="" src={FILE_PATH + media}
							/>
						</div>}
			</div>
	})
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <>
		<Modal className="jc-c ai-c" onClickBlack={() => setVisible(false)} visible={visible}>
			<div style={isMobile ? { width: '100%' } : { width: '80%', height: '80%' }} className="flex ai-c brd-3 bc-light p-5">
				<ReactElasticCarousel length={Items.length} initialFirstItem={indexShow} className="p-5" focusOnSelect={false} showArrows={true} itemsToShow={1}>
					{Items}
				</ReactElasticCarousel>
			</div>
		</Modal>
		<div {...props} id="galeri-kegiatan" className={`pt-3 pb-3 ai-c flex flex-col ${className}`}>
			<h4>Galeri Kegiatan</h4>
			<h5 className="p3 ta-c">{deskripsiGaleri}</h5>
			{isHome ? <ReactElasticCarousel length={Items.length} focusOnSelect={false} showArrows={true} itemsToShow={isMobile ? 1 : 4}>
				{Items}
			</ReactElasticCarousel> : Items}
		</div>
	</>
}

export default GaleriKegiatan