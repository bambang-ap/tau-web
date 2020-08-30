import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getManage, getArticle, FILE_PATH } from 'src/utils/api';
import ReactElasticCarousel from 'react-elastic-carousel';
import useWindowSize from 'src/utils/windowSize';

const InformasiBerita = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		const { data: manage } = await getManage({ part: 'staff' })
		const { data: { data } } = await getArticle()
		setState({ ...manage, data })
	}
	const Items = (isHome ? state.data.filter((a, i) => i < 8) : state.data).rMap(a => <div className={`flex flex-col`}>
		<div className="m-3 o-h b-1 content brd-3">
			<img alt="" src={FILE_PATH + a.foto} />
			<div className="p-3 pr-4 pl-4">
				<h5>{a.judul}</h5>
				<div>{a.deskripsi}</div>
				<Link to={'/' + a.url} className="as-fs c-link">baca selengkapnya &gt;</Link>
			</div>
		</div>
	</div>)
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="boa" className={`ai-c pt-3 pb-3 flex flex-col ${className}`}>
		<h5>Informasi & Berita</h5>
		<div className="mt-3 mb-3 flex w-full flex-wrap">
			{isHome ? <ReactElasticCarousel focusOnSelect={false} showArrows={false} className={``} itemsToShow={isMobile ? 1 : 4}>
				{Items}
			</ReactElasticCarousel> : Items}
		</div>
		{isHome && <Link to="/info/berita" className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>}
	</div>
}

export default InformasiBerita