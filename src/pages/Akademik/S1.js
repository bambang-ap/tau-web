import React from 'react';
import { FILE_PATH } from 'src/utils/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HtmlParser from 'react-html-parser';

const S1 = ({ match, data: { id, nama, data } }) => {
	const [state, _] = useState({ tab: 'visi_prodi' })
	const setState = v => _({ ...state, ...v })
	const jurusan = data.filter(({ id }) => id === match.params.jurusan)[0]
	return <div className="p-3">
		<div>{nama}</div>
		<div className="flex flex-col flex-1">
			<div className="flex flex-1 pl-5">
				<div className="w-1/5" />
				<div className={`${state.tab === 'visi_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'visi_prodi' })}>Visi</div>
				<div className={`${state.tab === 'misi_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'misi_prodi' })}>Misi</div>
				<div className={`${state.tab === 'kompetensi_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'kompetensi_prodi' })}>Kompetensi</div>
				<div className={`${state.tab === 'kurikulum_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'kurikulum_prodi' })}>Kurikulum</div>
			</div>
			{jurusan && <div className="flex">
				<div className="w-1/5 br-2 pr-5 flex flex-col">
					{data && data.rMap(program => {
						return <Link className={`${program.id === match.params.jurusan ? '' : 'c-text'} pt-3 pb-3 pr-3`} to={`/akademik/${match.params.akademik}/${id}/${program.id}`}>{program.nama_prodi}</Link>
					})}
				</div>
				<div className="p-5">{HtmlParser(jurusan[state.tab].replace(/\$FILE_PATH/g, FILE_PATH))}</div>
			</div>}
		</div>
	</div>
}

export default S1
