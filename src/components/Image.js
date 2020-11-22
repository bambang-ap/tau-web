import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({ src, ...rest }) => {
	return <LazyLoadImage
		alt=""
		src={src}
		{...rest} />
}

export default Image