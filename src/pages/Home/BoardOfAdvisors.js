import React, { useEffect, useState } from 'react';
import { FILE_PATH, getAdvisors } from 'src/utils/api';
import { Button } from 'src/components/Button';
import ReactElasticCarousel from 'react-elastic-carousel';
import { useHistory } from 'react-router-dom';
import useWindowSize from 'src/utils/windowSize';

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
			<ReactElasticCarousel className="mb-3" itemsToShow={isMobile ? 1 : 4} showArrows={false}>
				{dataAdv.rMap(({ nama_advisors, foto_advisors }) => <div className="flex w-full p-3 relative flex-col">
					<div className="flex flex-col b-1 content brd-3 o-h">
						<img alt="" className="w-auto brd-1 h-50 as-c" src={FILE_PATH + foto_advisors} />
						<h5 style={{ textShadow: "3px 3px rgba(50, 50, 50, 0.58)" }} className="absolute c-light name">{nama_advisors}{nama_advisors}{nama_advisors}</h5>
					</div>
				</div>)}
			</ReactElasticCarousel>
		</div>
		<Button>Lihat Semua</Button>
	</div>
}

export default BoardOfAdvisors