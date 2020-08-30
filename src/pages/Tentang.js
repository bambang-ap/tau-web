import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from 'src/utils/windowSize';
import { useState } from 'react';
import { getManage } from 'src/utils/api';
import HtmlParser from 'react-html-parser';

const tabs = [
	["/tentang/sejarah", "Sejarah TAU"],
	["/tentang/visi", "Visi & Misi"],
	["/tentang/struktur", "Struktur Organisasi"],
	["/tentang/sertifikasi", "Sertifikasi Akreditas"]
]
const Tentang = ({ match }) => {
	const [, , isMobile] = useWindowSize()
	const [deskripsi, setDeskripsi] = useState('')
	const getData = async () => {
		const { status, data: { content } } = await getManage({ part: match.params.part })
		if (status) {
			setDeskripsi(content)
		}
	}
	const effect = () => {
		getData()
	}
	useEffect(effect, [match])
	return <div id="tentang" className="p-3 flex flex-wrap">
		<div className="flex w-full flex-wrap">
			{tabs.map(([path, name], i) =>
				<Link key={i} to={path} className={`${window.location.href.includes(path) && 'active'} tab p-3 jc-c flex ${isMobile ? 'w-full' : 'w-1/4'}`} >{name}</Link>
			)}
		</div>
		<div className="flex w-full flex-col p-5">{HtmlParser(deskripsi.replacePath())}</div>
	</div>
}

export default Tentang
