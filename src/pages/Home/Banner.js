/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from 'src/utils/windowSize';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import { getBanner, FILE_PATH, getManage } from 'src/utils/api';
import { Link } from 'react-router-dom';
import Image from 'src/components/Image';

const Banner = ({ className = "", ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const header = document.querySelector('#header') || {}
	const infoRef = useRef()
	const [, maxHeight, isMobile = false] = useWindowSize()
	const [height, setHeight] = useState(0)
	const [manage, setManage] = useState({})
	const [banner, setBanner] = useState([])
	const getData = async () => {
		let manage = {}, manageParts = [
			'kontakPhone1',
			'kontakPhone2',
			'kontakSistemInformasiAkademik',
			'kontakTwitter',
			'kontakFacebook',
			'kontakInstagram'
		]
		const { data } = await getBanner({ isMobile })
		for (let i = 0; i < manageParts.length; i++) {
			const part = manageParts[i]
			const { data: { content } } = await getManage({ part })
			manage[part] = content
		}
		setManage(manage)
		setBanner(data)
	}
	const effect = () => {
		getData()
		if (infoRef) {
			const currentHeight = maxHeight - infoRef.current.clientHeight - header.clientHeight
			setHeight(isHome ? currentHeight : currentHeight / 1.5)
		}
	}
	useEffect(effect, [header.clientHeight, maxHeight, isHome])
	return <div {...props} id="banner" className={`flex flex-col ${className}`}>
		<div ref={infoRef} className={`flex flex-wrap p-3 ${!isMobile && 'pl-10 pr-10'} bc-link c-light f-20`}>
			<div className={`${isMobile ? 'f-3 w-full jc-c' : 'f-4 w-1/3 jc-fs'} flex`}>{manage.kontakPhone1} | {manage.kontakPhone2}</div>
			<a className={`${isMobile ? 'f-3 w-full jc-c' : 'f-4 w-1/3 jc-c'} mt-1 mb-1 flex`} target="_blank" href={manage.kontakSistemInformasiAkademik}>Sistem Informasi Akademik</a>
			<div className={`${isMobile ? 'f-3 w-full jc-c' : 'f-4 w-1/3 jc-fe'} flex ai-c`}>
				<a target="_blank" href={manage.kontakTwitter}>
					<i className={`${isMobile ? 'f-4' : 'f-6'} ml-5 c-light fa fa-instagram`} />
				</a>
				<a target="_blank" href={manage.kontakFacebook}>
					<i className={`${isMobile ? 'f-4' : 'f-6'} ml-5 c-light fa fa-facebook-square`} />
				</a>
				<a target="_blank" href={manage.kontakInstagram}>
					<i className={`${isMobile ? 'f-4' : 'f-6'} ml-5 c-light fa fa-twitter-square`} />
				</a>
			</div>
		</div>
		<ReactElasticCarousel
			pagination={isHome}
			className="m-0 pagination-inside"
			length={banner.length}
			itemsToShow={1}>
			{banner.filter(({ isForBanner }) => isHome ? isForBanner === '0' : isForBanner === '1').rMap(
				({ image, link }) => {
					const haveLink = link !== ''
					const banner = <div className={`w-full o-h`} style={{ height }}>
						<Image
							alt=""
							className="w-full h-full"
							src={FILE_PATH + image}
						/>
					</div>
					return haveLink ? link.validURL() ?
						<a target="_blank" href={link}>{banner}</a> :
						<Link to={link}>{banner}</Link>
						: banner
				}
			)}
		</ReactElasticCarousel>
	</div>
}

export default Banner