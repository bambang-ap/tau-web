import React, { useEffect, useState } from 'react';
import { getFacilities, getManage, IMG_PATH } from 'src/utils/api';
import { Link } from 'react-router-dom';

const Fasilitas = ({ className, ...props }) => {
	const isHome = window.location.pathname.includes('/home')
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data } = await getFacilities()
		const { data: manage } = await getManage({ part: 'fasilitas' })
		setState({ ...manage, data })
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="fasilitas" className={`flex flex-wrap jc-c ${className}`}>
		{isHome && <div className="flex w-1/4 jc-c ai-fs flex-col p-5">
			<h4 onClick={() => console.log(state)}>Fasilitas</h4>
			<p className="mt-5 mb-5">{state.content}</p>
			<Link to={'/fasilitas'} className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>
		</div>}
		{
			(
				isHome ?
					state.data.filter((a, i) => i < 3) :
					state.data
			).rMap(a => <div className="flex w-1/4 flex-col p-5">
				<img className="brd-3" alt="" src={IMG_PATH + a.foto} />
				<div className="mt-5">{a.nama}</div>
			</div>)
		}
	</div>
}

export default Fasilitas