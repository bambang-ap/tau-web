import React, { useEffect } from 'react';
import { IMG_PATH, getManage } from 'src/utils/api';
import HtmlParser from 'react-html-parser';
import { useState } from 'react';

const Sambutan = ({ className, ...props }) => {
	const [state, setState] = useState({ image: '' })
	const getData = async () => {
		const { data } = await getManage({ part: 'sambutan' })
		setState(data)
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="sambutan" className={`ai-c flex flex-col ${className}`}>
		<h4>Sambutan Rektor TAU</h4>
		<div className="flex ai-c mt-5 pl-15 pr-15">
			<div className="flex brd-3 o-h w-1/5">
				<img className="w-auto h-auto" alt="" src={IMG_PATH + state.image} />
			</div>
			<div className="flex flex-col w-4/5 pl-5">
				{HtmlParser(state.content)}
			</div>
		</div>
	</div>
}

export default Sambutan