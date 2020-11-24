import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useSelector } from 'react-redux';

const Image = ({ src, nativeImage, ...rest }) => {
	const Web = useSelector(state => state.Web)
	if (nativeImage)
		return <img alt=""
			src={src}
			{...rest} />
	return Web.documentReady ? <LazyLoadImage
		alt=""
		effect="blur"
		src={src}
		{...rest} /> : null
}

export default Image