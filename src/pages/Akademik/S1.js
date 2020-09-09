import React from 'react';
import { FILE_PATH } from 'src/utils/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HtmlParser from 'react-html-parser';
import Select from 'src/components/Select';
import useWindowSize from 'src/utils/windowSize';

const S1 = ({ match, data: { id, nama, data = [] } }) => {
	const [, , isMobile] = useWindowSize()
	console.log(isMobile)
	const [state, _] = useState({ tab: 'deskripsi_prodi' })
	const setState = v => _({ ...state, ...v })
	const jurusan = data.filter(({ id }) => id === match.params.jurusan)[0]
	const tabs = ['deskripsi_prodi', 'visi_prodi', 'misi_prodi', 'kompetensi_prodi', 'kurikulum_prodi', 'dosen_prodi']
	return <div className="p-3">
		<h5 className="ta-c mb-3">{nama}</h5>
		{jurusan && <div className="flex flex-wrap flex-col xl:flex-row">
			<div className="xl:w-1/4 xl:br-2 xl:pr-5 flex flex-col">
				<div className="xl:p-8" />
				<Select
					value={data.filter(({ id }) => id === match.params.jurusan).map(program => program.nama_prodi).join('').ucwords()}
					wrapperClass={"br-2"}
					renderSelect={isMobile}
					render={({ item: program }) => <Link
						className={`${program.id === match.params.jurusan ? 'c-link' : 'c-text'} flex ${!isMobile}`}
						to={`/akademik/${match.params.akademik}/${id}/${program.id}`}>{program.nama_prodi.ucwords()}
					</Link>}
					data={data}
				/>
			</div>
			{isMobile && <div className="mb-3" />}
			<div className="xl:w-3/4">
				{isMobile ? <Select
					value={state.tab.replace(/_\w+/g, '').ucwords()}
					renderSelect
					data={tabs}
					render={({ item: tab }) => <div
						className={`${state.tab === tab ? 'c-link' : ''} flex`}
						onClick={() => setState({ tab: tab })}>{tab.replace(/_\w+/g, '').ucwords()}</div>}
				/> : <div className="flex flex-col xl:flex-row flex-1 flex-wrap">
						{tabs.rMap(tab => <div
							className={`${state.tab === tab ? 'bb-2-link c-link' : 'bb-2'} flex jc-c flex-1 p-3`}
							onClick={() => setState({ tab: tab })}>{tab.replace(/_\w+/g, '').ucwords()}</div>)}
					</div>}
				<div style={{ overflowWrap: 'anywhere', textAlign: 'justify' }} className="flex flex-wrap p-3 xl:p-5">
					<div className="content-berita">{HtmlParser(jurusan[state.tab].replace(/\$FILE_PATH/g, FILE_PATH))}</div>
				</div>
			</div>
		</div>
		}
	</div >
}

export default S1
