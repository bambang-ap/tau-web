import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import StaffPengajar from 'src/pages/Home/StaffPengajar'

const AkademikRoute = ({ match }) => {
	const url = match.url
	return <div className="pr-20 pl-20">
		<Switch>
			<Route path={url} exact component={() => <Redirect to={`${url}/staff`} />} />
			<Route path={`${url}/staff`} exact component={StaffPengajar} />
			<Route path={`${url}/s1`} exact component={StaffPengajar} />
			<Route path={`${url}/s1/:program`} exact component={StaffPengajar} />
			<Route path={`${url}/international`} exact component={StaffPengajar} />
			<Route path={`${url}/international/:program`} exact component={StaffPengajar} />
		</Switch>
	</div>
}

export default AkademikRoute