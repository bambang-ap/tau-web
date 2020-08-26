import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getArticleSet } from 'src/utils/api';

const RedirectArticle = ({ part }) => {
	const history = useHistory()
	const getPart = async () => {
		const { data, status } = await getArticleSet({ part })
		console.log(status, data)
		if (status) {
			history.replace(data.url)
		} else {
			history.replace('/404')
		}
	}
	const effect = () => {
		getPart()
	}
	useEffect(effect, [])
	return null
}

export default RedirectArticle