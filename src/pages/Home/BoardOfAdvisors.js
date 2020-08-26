import React, { useEffect, useState } from 'react';
import { FILE_PATH, getAdvisors } from 'src/utils/api';

const BoardOfAdvisors = ({ className, staticContext, ...props }) => {
	const [dataAdv, setDataAdv] = useState([])
	const getData = async () => {
		const { status, data } = await getAdvisors({ visible: true })
		if (status) setDataAdv(data)
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return dataAdv.length > 0 && <div {...props} id="boa" className={`ai-c flex flex-col pt-3 pb-3 ${className}`}>
		<h4>Board of Advisors</h4>
		<div className="mt-5 flex flex-wrap w-full jc-c">
			{dataAdv.rMap(({ nama_advisors, foto_advisors }) => <div className="flex w-full p-3 xl:w-1/4 w-full relative flex-col">
				<div className="flex flex-col b-1 content brd-3 o-h">
					<img alt="" className="w-full h-auto" src={FILE_PATH + foto_advisors} />
					<h5 className="absolute c-light name">{nama_advisors}</h5>
				</div>
			</div>)}
		</div>
		<button className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</button>
	</div>
}

export default BoardOfAdvisors