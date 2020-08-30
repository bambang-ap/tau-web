import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from 'src/utils/windowSize';
import { getBanner, FILE_PATH } from 'src/utils/api';
import ReactElasticCarousel from 'react-elastic-carousel';

const Banner = ({ className = "", ...props }) => {
	const autPlaySpeed = 5000
	const header = document.querySelector('#header') || {}
	const infoRef = useRef()
	const carouselRef = useRef()
	const [, maxHeight, isMobile = false] = useWindowSize()
	const [height, setHeight] = useState(0)
	const [banner, setBanner] = useState([])
	const getData = async () => {
		const { data } = await getBanner({ isMobile })
		setBanner(data)
	}
	const effect = () => {
		getData()
		if (infoRef) {
			setHeight(maxHeight - infoRef.current.clientHeight - header.clientHeight)
		}
	}
	useEffect(effect, [header.clientHeight, maxHeight])
	return <div {...props} id="banner" className={`flex flex-col ${className}`}>
		<div ref={infoRef} className={`flex flex-wrap p-3 ${!isMobile && 'pl-10 pr-10'} bc-grey-hard c-light f-20`}>
			<div className={`${isMobile ? 'f-3 w-full jc-c' : 'f-4 w-1/3 jc-fs'} flex`}>+62 21 5890 8888 atau (+62) 8123 729 0009</div>
			<div className={`${isMobile ? 'f-3 w-full jc-c' : 'f-4 w-1/3 jc-c'} mt-1 mb-1 flex`}>Sistem Informasi Akademik</div>
			<div className={`${isMobile ? 'f-3 w-full jc-c' : 'f-4 w-1/3 jc-fe'} flex ai-c`}>
				<i className={`${isMobile ? 'f-4' : 'f-6'} ml-5 fa fa-instagram`} />
				<i className={`${isMobile ? 'f-4' : 'f-6'} ml-5 fa fa-facebook-square`} />
				<i className={`${isMobile ? 'f-4' : 'f-6'} ml-5 fa fa-twitter-square`} />
			</div>
		</div>
		<ReactElasticCarousel
			enableAutoPlay
			ref={carouselRef}
			autoPlaySpeed={autPlaySpeed}
			focusOnSelect={false}
			showArrows={false}
			className="m-0 pagination-inside"
			itemsToShow={1}
			onNextEnd={({ index }) => index === banner.length - 1 && setTimeout(() => carouselRef.current.goTo(0), autPlaySpeed / 1.5)}>
			{banner.rMap(({ image }) =>
				<div style={{ height }}>
					<img
						alt=""
						className="h-full w-auto"
						src={FILE_PATH + image}
					/>
				</div>
			)}
		</ReactElasticCarousel>
	</div>
}

export default Banner