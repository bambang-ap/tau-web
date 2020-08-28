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
		<h5 className="ta-c mb-3">{nama}</h5>
		{jurusan && <div className="flex flex-wrap flex-col xl:flex-row">
			<div className="xl:w-1/4 xl:br-2 xl:pr-5 flex flex-col">
				<div className="xl:p-8" />
				{data && data.rMap(program => {
					return <Link className={`${program.id === match.params.jurusan ? '' : 'c-text'} pt-3 pb-3 pr-3 br-2`} to={`/akademik/${match.params.akademik}/${id}/${program.id}`}>{program.nama_prodi.ucwords()}</Link>
				})}
			</div>
			<div className="xl:w-3/4">
				<div className="flex flex-col xl:flex-row flex-1 flex-wrap">
					<div className={`${state.tab === 'visi_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'visi_prodi' })}>Visi</div>
					<div className={`${state.tab === 'misi_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'misi_prodi' })}>Misi</div>
					<div className={`${state.tab === 'kompetensi_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'kompetensi_prodi' })}>Kompetensi</div>
					<div className={`${state.tab === 'kurikulum_prodi' ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`} onClick={() => setState({ tab: 'kurikulum_prodi' })}>Kurikulum</div>
				</div>
				<div style={{ overflowWrap: 'anywhere', textAlign: 'justify' }} className="flex flex-wrap p-3 xl:p-5">{HtmlParser(jurusan[state.tab].replace(/\$FILE_PATH/g, FILE_PATH))}</div>
			</div>
		</div>}
	</div>
}

export default S1
