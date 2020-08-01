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
		const Menu = id === ""
		return arr.map(
			({ name, path, subMenu }, i) => {
				const viewId = (id + name + "-").replace(/\s/g, '')
				const viewPath = prevPath + path
				return subMenu ?
					<div className="menu flex flex-1 as-c" key={i}>
						<button className={`f-4 ${Menu && 'jc-c'} flex ai-c jc-sb flex flex-1 link`} onMouseEnter={() => openSubMenu(viewId)} onClick={() => openSubMenuClick(viewPath, true)}>
							<div>{name}</div>
							{!Menu && <i className="ml-3 c-grey fa fa-chevron-right" />}
						</button>
						<div className={`sub-menu ${Menu && 'tail'}`} style={{ display: subMenuOpen[viewId] ? 'block' : 'none' }}>
							{NavBar(subMenu, viewId, viewPath)}
						</div>
					</div> :
					<div className="menu flex flex-1 as-c" key={i}>
						<button className={`f-4 ${Menu && 'jc-c'} flex flex-1 link ${path === '/' && 'active'}`} onMouseEnter={() => openSubMenu(viewId)} onClick={() => openSubMenuClick(viewPath)}>{name}</button>
					</div>
			}
		)
	}

	return <div id="header" {...props} className={`w-full flex bg-white ${className}`}>
		{Object.keys(subMenuOpen).length > 0 && <div className="black" onMouseEnter={() => setSubMenuOpen({})} />}
		<div className="flex">
			<img className="logo" alt="" src={require('src/assets/images/logo-tau.png')} />
		</div>
		<div className="mr-20" />
		<div className="flex flex-1">
			{UI.nav && NavBar(UI.nav)}
		</div>
	</div>
}

export default Header