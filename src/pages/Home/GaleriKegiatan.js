import React from 'react';
import { useState } from 'react';
import { getGaleri, getManage } from 'src/utils/api';
import { useEffect } from 'react';
import { FILE_PATH } from '../../utils/api';

const GaleriKegiatan = ({ className, staticContext, ...props }) => {
	const [dataGaleri, setDataGaleri] = useState([])
	const [deskripsiGaleri, setDeskripsiGaleri] = useState('')
	const getData = async () => {
		const { status, data } = await getGaleri({ visible: true })
		const { status: statusManage, data: { content } } = await getManage({ part: 'galeri' })
		if (status) setDataGaleri(data)
		if (statusManage) setDeskripsiGaleri(content)
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [])
	return <div {...props} id="galeri-kegiatan" className={`pt-3 pb-3 ai-c flex flex-col ${className}`}>
		<h4>Galeri Kegiatan</h4>
		<h5 className="mt-5 mb-5 ta-c">{deskripsiGaleri+deskripsiGaleri+deskripsiGaleri}</h5>
		<div className="mt-5 flex flex-wrap w-full jc-c">
			{dataGaleri.rMap(({ nama, deskripsi, media, is_video }) => <div className="xl:w-1/4 p-3">
				<div className="flex flex-col b-1 content brd-3 o-h">
					{is_video === '1' ? <video controls>
						<source src={FILE_PATH + media} />
					</video> : <img alt="" src={FILE_PATH + media} />}
					<div className="p-3 pr-4 pl-4">
						<h5>{nama}</h5>
						<div>{deskripsi}</div>
					</div>
				</div>
			</div>)}
		</div>
	</div>
}

export default GaleriKegiatan