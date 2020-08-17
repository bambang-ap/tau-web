import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getManage, getArticle, IMG_PATH } from 'src/utils/api';

const InformasiBerita = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data: manage } = await getManage({ part: 'staff' })
		const { data: { data } } = await getArticle()
		setState({ ...manage, data })
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="boa" className={`ai-c pt-5 flex flex-col ${className}`}>
		<h5>Informasi & Berita</h5>
		<div className="mt-5 flex flex-wrap">
			{(isHome ? state.data.filter((a, i) => i < 4) : state.data).rMap(a => <div className="flex flex-col w-1/4">
				<div className="m-3 o-h b-1 content brd-3">
					<img alt="" src={IMG_PATH + a.foto} />
					<div className="p-3 pr-4 pl-4">
						<h5>{a.judul}</h5>
						<div>{a.deskripsi}</div>
						<Link to={'/info/berita/' + a.url} className="as-fs c-link">baca selengkapnya &gt;</Link>
					</div>
				</div>
			</div>)}
		</div>
		{isHome && <Link onClick={'/info/berita'} className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>}
	</div>
}

export default InformasiBerita