import React, { useEffect } from 'react';
import { FILE_PATH, getManage } from 'src/utils/api';
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
		<div className="flex flex-wrap ai-c mt-5 p-5 xl:pl-15 xl:pr-15">
			<div className="flex brd-3 o-h jc-c w-full h-auto xl:w-1/5">
				<img className="h-auto sm:w-1/2 md:w-auto" alt="" src={FILE_PATH + state.image} />
			</div>
			<div className="flex flex-col w-full xl:w-4/5 xl:pl-5">
				{HtmlParser(state.content)}
			</div>
		</div>
	</div>
}

export default Sambutan