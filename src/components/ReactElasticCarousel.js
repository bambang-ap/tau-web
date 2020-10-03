import React, { useRef } from 'react';
import ReactCarousel from "react-elastic-carousel"

const ReactElasticCarousel = ({ className = "", itemsToShow, length, children, ...rest }) => {
	const autoPlaySpeed = 5000
	const carouselRef = useRef()
	return <ReactCarousel
		enableAutoPlay
		className={`${className} arrow-dark`}
		ref={carouselRef}
		autoPlaySpeed={autoPlaySpeed}
		focusOnSelect={false}
		showArrows={children.length > 0 ? true : false}
		itemsToShow={itemsToShow}
		onNextEnd={({ index }) => {
			// console.log(index, itemsToShow, length, carouselRef)
			index === length - itemsToShow && setTimeout(() => {
				carouselRef.current.goTo(0)
			}, autoPlaySpeed / 1.5)
		}}
		{...rest}>
		{children}
	</ReactCarousel>
}

export default ReactElasticCarousel