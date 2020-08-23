import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Akademik from 'src/pages/Akademik'
import Programs from 'src/pages/Akademik/Programs';
import Jurusan from 'src/pages/Akademik/Jurusan';
import Staff from 'src/pages/Akademik/Staff';

const AkademikRoute = ({ match }) => {
	const url = match.url
	return <div className="pr-20 pl-20">
		<Switch>
			<Route path={url} exact component={() => <Redirect to={`${url}/staff`} />} />
			<Route path={`${url}/staff`} exact component={Staff} />
			{/* <Route path={`${url}/:akademik`} exact component={({ match }) => <Redirect to={`${match.url}/sdsd`} />} /> */}
			<Route path={`${url}/:akademik/:program`} exact component={Akademik} />
			<Route path={`${url}/:akademik/:program/:jurusan`} exact component={Akademik} />
		</Switch>
	</div>
}

export default AkademikRoute