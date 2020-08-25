import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import actionsWeb from 'src/redux/actions/web';
import { getArticle, FILE_PATH } from 'src/utils/api';
import HtmlParser from 'react-html-parser';

const Article = ({ match: { params } }) => {
	const [state, setState] = useState({ artikel: '' })
	const dispatch = useDispatch()
	const getData = async () => {
		const { data: article } = await getArticle(params)
		if (article) {
			setState(article)
		}
		console.log(article)
	}
	const effect = () => {
		getData()
		dispatch(actionsWeb({ noBanner: true, noFooter: true }))
	}
	useEffect(effect, [])
	const parseHtml = string => {
		return HtmlParser(string)
	}
	return <div>
		<h1>{state.judul}</h1>
		<img alt="" src={FILE_PATH + state.foto} />
		{parseHtml(state.artikel.replace(/\$FILE_PATH/g, FILE_PATH))}
		{/* {HtmlParser(state.artikel.replace(/\$FILE_PATH/g, FILE_PATH), {
			preprocessNodes: a => {
				console.log(a)
				return a
			}
		})} */}
	</div>
}

export default Article