import React from 'react';
import { Redirect } from 'react-router-dom';
import International from './International';

const Programs = props => {
	const { match } = props
	const Jurusan = {
		"management-leadership": ["bisnis", "akutansi", "manajemen", "komunikasi"],
		"engineering-technology": ["arsitek", "ti", "elektro", "sipil", "si"]
	}
	const render = () => {
		const { akademik, program, jurusan } = match.params
		if (akademik !== 'international') {
			const key = Jurusan[program][0]
			return <Redirect params={{ shs: 678 }} to={`${match.url}/${jurusan || key}`} />
		}
		return <International {...props} />
	}
	return render()
}

export default Programs