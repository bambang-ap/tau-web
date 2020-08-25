import React, { useState } from 'react';
import { getProgramStudi, getManage, getS1, FILE_PATH } from 'src/utils/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProgramStudi = ({ className, ...props }) => {
	const [state, setState] = useState({ data: [] })
	const getData = async () => {
		const { data: manage } = await getManage({ part: 's1' })
		const { data: program } = await getProgramStudi()
		const { data } = await getS1({ id_program: program[0].id })
		setState({ ...manage, data })
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="program-studi" className={`ai-c flex wrap flex-col ${className}`}>
		<h4>Program Studi</h4>
		<h5 className="mt-5 mb-5">{state.content}</h5>
		<Link to="/akademik/s1" className="b-1 p-2 pl-10 pr-10 brd-3 bc-light">Lihat Semua</Link>
		<div className="mt-5 flex-wrap flex">
			{state.data.filter((a, i) => i < 7).rMap(jurusan =>
				<div className="flex flex-col w-full xl:w-1/4">
					<div className="m-3 o-h brd-3">
						<img alt="" src={FILE_PATH + jurusan.foto_prodi} />
						<div className="p-3 pr-4 pl-4">
							<h5>{jurusan.nama_prodi}</h5>
							<div>{jurusan.deskripsi_prodi}</div>
							<Link to={`/akademik/s1/${jurusan.id_program}/${jurusan.id}`} className="as-fs c-link">baca selengkapnya &gt;</Link>
						</div>
					</div>
				</div>)}
		</div>
	</div>
}

export default ProgramStudi