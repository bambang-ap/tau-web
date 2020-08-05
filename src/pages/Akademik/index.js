import React from 'react';
import { Redirect } from 'react-router-dom';
import Staff from './Staff';

const Akademik = props => {
	const { match } = props
	const Programs = {
		international: ["australian-university", "business"],
		s1: ["management-leadership", "engineering-technology"]
	}
	const render = () => {
		const { akademik, program } = match.params
		if (akademik !== 'staff') {
			const key = Programs[akademik][0]
			return <Redirect to={`${match.url}/${program || key}`} />
		}
		return <Staff  {...props} />
	}
	return render()
}

export default Akademik
