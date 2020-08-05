import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Akademik from 'src/pages/Akademik'
import Programs from 'src/pages/Akademik/Programs';
import Jurusan from 'src/pages/Akademik/Jurusan';

const AkademikRoute = ({ match }) => {
	const url = match.url
	return <div className="pr-20 pl-20">
		<Switch>
			<Route path={url} exact component={() => <Redirect to={`${url}/staff`} />} />
			<Route path={`${url}/:akademik`} exact component={Akademik} />
			<Route path={`${url}/:akademik/:program`} exact component={Programs} />
			<Route path={`${url}/:akademik/:program/:jurusan`} exact component={Jurusan} />
		</Switch>
	</div>
}

export default AkademikRoute