import React from 'react';
import { useSelector } from 'react-redux';
import S1 from 'src/pages/Akademik/S1';
import International from 'src/pages/Akademik/International';

const Akademik = props => {
	const { match: { params } } = props
	const isS1 = params.akademik === 's1'
	const Web = useSelector(state => state.Web)
	const programs = isS1 ? Web.programS1 : []
	return programs ? programs.filter(a => a.id === params.program).rMap(data => {
		return isS1 ? <S1 {...props} data={data} /> : <International {...props} data={data} />
	}) : ''
}

export default Akademik
