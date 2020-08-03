import React from 'react'
import { Switch } from "react-router-dom"
import Banner from 'src/pages/Home/Banner'
import Home from 'src/pages/Home'

const HomeRoute = () => {
	return <>
		<Banner />
		<Home />
		<Switch></Switch>
	</>
}

export default HomeRoute