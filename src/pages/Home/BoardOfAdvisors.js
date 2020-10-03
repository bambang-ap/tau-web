import React, { useEffect, useState } from 'react';
import { FILE_PATH, getAdvisors } from 'src/utils/api';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import { Link, useHistory } from 'react-router-dom';
import useWindowSize from 'src/utils/windowSize';
import { btnClass } from 'src/utils/paths';

const BoardOfAdvisors = ({ className, staticContext, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const history = useHistory()
	const [dataAdv, setDataAdv] = useState([])
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		const { status, data } = await getAdvisors({ visible: true })
		if (status) {
			setDataAdv(data)
			if (!isHome && data.length === 0) {
				history.push('/404')
			}
		}
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return dataAdv.length > 0 && <div {...props} id="boa" className={`ai-c flex flex-col pt-3 pb-3 ${className}`}>
		<h4>Board of Advisors</h4>
		<div className="mt-5 flex flex-wrap w-full jc-c">
			<ReactElasticCarousel length={dataAdv.length} className="mb-3" itemsToShow={isMobile ? 1 : 4} showArrows={true}>
				{dataAdv.rMap(({ nama_advisors, foto_advisors }) => <div className="flex w-full p-3 relative flex-col">
					<div className="shadow-md w-full h-55 relative content brd-3 o-h">
						<div className="w-full h-auto brd-1 as-c o-h">
							<img alt="" className="zoom" src={FILE_PATH + foto_advisors} />
						</div>
						<h6 className="text-shadow-md mr-3 ml-3 absolute c-light name">{nama_advisors}</h6>
					</div>
				</div>)}
			</ReactElasticCarousel>
		</div>
		{isHome && <Link className={`${btnClass} bc-light`} to="/board-of-advisors">Lihat Semua</Link>}
	</div>
}

export default BoardOfAdvisors