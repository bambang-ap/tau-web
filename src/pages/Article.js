import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import actionsWeb from 'src/redux/actions/web';
import { getArticle, FILE_PATH } from 'src/utils/api';
import HtmlParser from 'react-html-parser';
import useWindowSize from 'src/utils/windowSize';
import bbobHTML from '@bbob/html'
import presetHtml from '@bbob/preset-html5'

const Article = ({ match: { params } }) => {
	const [state, setState] = useState({ artikel: '' })
	const dispatch = useDispatch()
	const getData = async () => {
		const { data: article } = await getArticle(params)
		if (article) {
			setState(article)
		}
	}
	const effect = () => {
		getData()
		dispatch(actionsWeb({ noBanner: true/* , noFooter: true */ }))
	}
	useEffect(effect, [])
	const parseHtml = article => {
		article = article.replace(/\$FILE_PATH/g, FILE_PATH)
		article = bbobHTML(article, presetHtml())
		return HtmlParser(article)
	}
	const [, , isMobile] = useWindowSize()
	return <div id="content-berita" className={`p-3 flex flex-col`}>
		<div className={`flex ${isMobile ? 'flex-col-reverse' : ''}`}>
			<div className={`w-full ${!isMobile && 'pr-3'}`}>
				<img className="w-full h-auto" alt="" src={FILE_PATH + state.foto} />
			</div>
			<div className={`${isMobile ? '' : 'as-fe w-2/3'}`}>
				<h1>{state.judul}</h1>
				<h5>{state.tgl}</h5>
			</div>
		</div>
		<div className="pt-5 pb-5">
			{parseHtml(state.artikel)}
		</div>
	</div>
}

export default Article