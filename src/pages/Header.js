import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actionsUi from '../redux/actions/ui';

const Header = ({ className, ...props }) => {
	const { data: UI } = useSelector(state => state.UI)
	const dispatch = useDispatch()
	const history = useHistory()
	const [subMenuOpen, setSubMenuOpen] = useState({})

	useEffect(() => {
		dispatch(actionsUi())
	}, [dispatch])

	const openSubMenu = (id) => {
		let menu = {}
		let parent = id.split('-').filter(a => a !== "").map(a => a + "-")
		parent.forEach((a, i) => {
			parent[i] = (parent[i - 1] || "") + parent[i]
			menu[parent[i]] = true
		})
		setSubMenuOpen({ ...menu })
	}

	const openSubMenuClick = (path, isSubMenu = false) => {
		if (!isSubMenu)
			history.push(path)
	}

	const NavBar = (arr, id = "", prevPath = "") => {
		return arr.map(
			({ name, path, subMenu }, i) => {
				const viewId = (id + name + "-").replace(/\s/g, '')
				const viewPath = prevPath + path
				return subMenu ?
					<div className="menu w-full as-c ta-c" key={i}>
						<button className="w-full link" onMouseEnter={() => openSubMenu(viewId)} onClick={() => openSubMenuClick(viewPath, true)}>{name}</button>
						<div className="sub-menu" style={{ display: subMenuOpen[viewId] ? 'block' : 'none' }}>
							{NavBar(subMenu, viewId, viewPath)}
						</div>
					</div> :
					<div className="menu w-full as-c ta-c" key={i}>
						<button className={`w-full link ${path === '/' && 'active'}`} onMouseEnter={() => openSubMenu(viewId)} onClick={() => openSubMenuClick(viewPath)}>{name}</button>
					</div>
			}
		)
	}

	return <div id="header" {...props} className={`flex flex-wrap w-full bg-white ${className}`}>
		{Object.keys(subMenuOpen).length > 0 && <div className="black" onMouseEnter={() => setSubMenuOpen({})} />}
		<div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
			<img className="logo" alt="" src={require('src/assets/images/logo-tau.png')} />
		</div>
		<div className="flex sm w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3">
			{UI.nav && NavBar(UI.nav)}
		</div>
	</div>
}

export default Header