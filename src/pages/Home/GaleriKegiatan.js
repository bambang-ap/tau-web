import React from 'react';
import { useState } from 'react';
import { getGaleri, getManage } from 'src/utils/api';
import { useEffect } from 'react';
import { FILE_PATH } from '../../utils/api';
import ReactElasticCarousel from 'react-elastic-carousel';
import useWindowSize from 'src/utils/windowSize';

const GaleriKegiatan = ({ className, staticContext, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [dataGaleri, setDataGaleri] = useState([])
	const [, , isMobile] = useWindowSize()
	const [deskripsiGaleri, setDeskripsiGaleri] = useState('')
	const getData = async () => {
		const { status, data } = await getGaleri({ visible: true })
		const { status: statusManage, data: { content } } = await getManage({ part: 'galeri' })
		if (status) setDataGaleri(data)
		if (statusManage) setDeskripsiGaleri(content)
	}
	const Items = dataGaleri.rMap(({ nama, deskripsi, media, is_video }) => <div className="m-3 flex flex-col b-1 w-full content brd-3 o-h">
		{is_video === '1' ? <video className="w-auto as-c flex h-50" controls>
			<source src={FILE_PATH + media} />
		</video> : <img className="w-auto as-c flex h-50" alt="" src={FILE_PATH + media} />}
		<div className="p-3 pr-4 pl-4">
			<h5>{nama}</h5>
			<div>{deskripsi}</div>
		</div>
	</div>)
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="galeri-kegiatan" className={`pt-3 pb-3 ai-c flex flex-col ${className}`}>
		<h4>Galeri Kegiatan</h4>
		<h5 className="mt-3 mb-3 ta-c">{deskripsiGaleri + deskripsiGaleri + deskripsiGaleri}</h5>
		{isHome ? <ReactElasticCarousel focusOnSelect={false} showArrows={false} itemsToShow={isMobile ? 1 : 4}>
			{Items}
		</ReactElasticCarousel> : Items}
	</div>
}

export default GaleriKegiatan