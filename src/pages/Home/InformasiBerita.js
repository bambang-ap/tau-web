/* eslint-disable no-redeclare */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticle, FILE_PATH } from 'src/utils/api';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import useWindowSize from 'src/utils/windowSize';
import { btnClass, substr } from 'src/utils/paths';
import Image from 'src/components/Image';

const InformasiBerita = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const [, , isMobile] = useWindowSize()
	const getData = async () => {
		let from = 0, dataArticle = []
		var { data: { data, total, limit }, status } = await getArticle()
		if (status) {
			if (Array.isArray(data)) {
				dataArticle = data
			}
		}
		if (status && data) {
			const sisa = total % limit
			const loop = (total - sisa) / limit + (sisa > 0 ? 1 : 0)
			for (let i = 1; i < loop; i++) {
				from = i * limit
				var { status, data: { data } } = await getArticle({ from, limit })
				if (status) {
					if (Array.isArray(data)) {
						dataArticle = [...dataArticle, ...data]
					}
				}
			}
			total = dataArticle.length
		}
		setState({ total, data: dataArticle })
	}
	const Items = (isHome ? state.data.filter((a, i) => i < 8) : state.data).rMap(a => <div className={`flex p-3 ${isHome ? 'w-full' : isMobile ? 'w-full' : 'w-1/4'} flex-col`}>
	<div className="b-1 brd-1 flex flex-col">
			<Link to={'/' + a.url} className="o-h brd-1 mt-1 h-50 w-auto">
				<Image alt="" className="zoom" src={FILE_PATH + a.foto} />
			</Link>
			<div className="p-3 pr-4 pl-4">
				<h5>{a.judul}</h5>
				<div>{substr(a.deskripsi, 150)}</div>
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
			{isHome ? <ReactElasticCarousel length={Items.length} focusOnSelect={false} showArrows={true} className={``} itemsToShow={isMobile ? 1 : 4}>
				{Items}
			</ReactElasticCarousel> : <div className="flex flex-wrap">{Items}</div>}
		</div>
		{isHome && <Link to="/info/berita" className={`bc-light ${btnClass}`}>Lihat Semua</Link>}
	</div>
}

export default InformasiBerita