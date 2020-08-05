import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Jurusan = ({ match, ...p }) => {
	const { akademik, program, jurusan } = match.params
	const [tabIndex, setTabIndex] = useState(0)
	const Tabs = ["Ringkasan", "Kurikulum", "Kompetensi & Karir", "Dosen"]
	const Jurusan = {
		"management-leadership": { "bisnis": "bisnis", "akutansi": "akutansi", "manajemen": "manajemen", "komunikasi": "komunikasi" },
		"engineering-technology": { "arsitek": "arsitek", "ti": "ti", "elektro": "elektro", "sipil": "sipil", "si": "si" }
	}

	return <div className="flex p-10">
		<div className="flex flex-1 flex-col">
			<div className="flex as-fe w-5/6 pb-5">
				{Tabs.rMap((t, i) => <button onClick={() => setTabIndex(i)} className={`flex flex-1 jc-c bb-2 p-5 ${tabIndex === i && 'bb-3-link c-link'}`}>{t}</button>)}
			</div>
			<div className="flex flex-1">
				<div className="flex pr-10 br-2 flex-col">
					{Object.keys(Jurusan[program]).map((jur, i) => <Link className={`p-5 ${jur === jurusan && 'c-link'}`} to={`/akademik/${akademik}/${program}/${jur}`} key={i}>{jur.ucwords()}</Link>)}
				</div>
				<div className="flex p-10 ml-5 flex-1">
					{Tabs[tabIndex]} {jurusan} Culpa in qui non velit minim ipsum qui tempor fugiat ea eu aliqua non. Aliquip enim irure fugiat deserunt aliqua eu elit. Excepteur reprehenderit reprehenderit dolore labore laboris duis sit aliquip sint eu cillum eiusmod. Quis culpa quis nulla incididunt enim deserunt officia nostrud do dolor adipisicing eu. Ut fugiat duis sit magna esse ipsum occaecat proident dolore.
				</div>
			</div>
		</div>
	</div>
}

export default Jurusan