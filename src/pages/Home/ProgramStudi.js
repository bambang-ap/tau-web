import React, { useState } from 'react';
import { getProgramStudi, getManage } from 'src/utils/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProgramStudi = ({ className, ...props }) => {
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data: manage } = await getManage({ part: 's1' })
		const { data } = await getProgramStudi()
		setState({ ...manage, data })
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="program-studi" className={`ai-c flex flex-col ${className}`}>
		<h4>Program Studi</h4>
		<h5 className="mt-5 mb-5">{state.content}</h5>
		<Link to="/akademik/s1" className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>
		<div className="mt-5 flex-wrap flex">
			{state.data.filter(({ bagian }) => bagian === 'School Of Management & Leadership').filter((a, i) => i < 7).rMap(jurusan =>
				<div className="flex flex-col w-1/4">
					<div className="m-3 o-h brd-3">
						<img alt="" src={require('src/assets/images/1-1.jpg')} />
						<div className="p-3 pr-4 pl-4">
							<h5>{jurusan.nama}</h5>
							<div>{jurusan.deskripsi}</div>
							<button className="as-fs c-link">baca selengkapnya &gt;</button>
						</div>
					</div>
				</div>)}
		</div>
	</div>
}

export default ProgramStudi