import React, { useEffect } from 'react';
import { FILE_PATH, getManage } from 'src/utils/api';
import HtmlParser from 'react-html-parser';
import { useState } from 'react';
import { imgSize } from 'src/utils/actualImageSize';
import useWindowSize from 'src/utils/windowSize';

const Sambutan = ({ className, ...props }) => {
	const [state, setState] = useState({ image: '' })
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		let { data } = await getManage({ part: 'sambutan' })
		// const [width, height, isWidth] = await imgSize(FILE_PATH + data.image)
		data.image = FILE_PATH + data.image
		setState(data)
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="sambutan" className={`pt-3 ai-c flex flex-col ${className}`}>
		<h4>Sambutan Rektor TAU</h4>
		<div className="flex flex-wrap ai-c mt-5 p-5 xl:pl-15 xl:pr-15">
			<div className={`shadow-md brd-3 o-h jc-c ${isMobile ? 'mb-5 w-full h-auto' : 'w-55 h-55'}`}>
				<img className="h-auto w-full" alt="" src={state.image} />
			</div>
			<div className="flex flex-col w-full xl:w-4/5 xl:pl-5">
				{HtmlParser(state.content)}
			</div>
		</div>
	</div>
}

export default Sambutan