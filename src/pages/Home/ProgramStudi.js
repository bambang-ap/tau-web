import React, { useState } from 'react';
import { getProgramStudi, getManage, getS1, FILE_PATH } from 'src/utils/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactElasticCarousel from 'src/components/ReactElasticCarousel';
import useWindowSize from 'src/utils/windowSize';
import { btnClass, substr } from 'src/utils/paths';
import Image from 'src/components/Image';

const ProgramStudi = ({ className, ...props }) => {
	const [state, setState] = useState({ data: [], content: '' })
	const [, , isMobile] = useWindowSize()
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
	return <div {...props} id="program-studi" className={`${isMobile ? 'pt-3 pb-3' : ''} ai-c flex wrap flex-col ${className}`}>
		<h4>Program Studi</h4>
		<h6 className="p-3">{substr(state.content, 75)}</h6>
		<Link to={`/akademik/s1/1/2`} className={`bc-light ${btnClass}`}>Lihat Semua</Link>
		<ReactElasticCarousel length={state.data.length} focusOnSelect={false} showArrows={true} className="mt-3 mb-3" itemsToShow={isMobile ? 1 : 4}>
			{state.data.rMap(jurusan =>
				<div className="flex flex-col w-full">
					<div className="m-3 o-h brd-3 flex flex-col">
						<Link className="h-50 w-auto as-c o-h" to={`/akademik/s1/${jurusan.id_program}/${jurusan.id}`}>
							<Image alt="" className="zoom" src={FILE_PATH + jurusan.foto_prodi} />
						</Link>
						<div className="p-3 pr-4 pl-4">
							<h5>{jurusan.nama_prodi}</h5>
							<div>{substr(jurusan.deskripsi_prodi, 100)}</div>
							<Link to={`/akademik/s1/${jurusan.id_program}/${jurusan.id}`} className="as-fs c-link">baca selengkapnya &gt;</Link>
						</div>
					</div>
				</div>)}
		</ReactElasticCarousel>
	</div>
}

export default ProgramStudi