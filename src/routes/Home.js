import React from 'react'
import { Switch } from "react-router-dom"
import Home from 'src/pages/Home'

const HomeRoute = () => {
	return <>
		<Home />
		<Switch></Switch>
	</>
}

export default HomeRoute