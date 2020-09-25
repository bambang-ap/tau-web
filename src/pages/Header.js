import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useWindowSize from 'src/utils/windowSize';

const Header = ({ className, ...props }) => {
	const { data: { nav } } = useSelector(state => state.UI)
	const [subMenuOpen, setSubMenuOpen] = useState({})
	const history = useHistory()
	const openSubMenu = (id) => {
		let menu = {}
		let parent = id.split('-').filter(a => a !== "").map(a => a + "-")
		parent.forEach((a, i) => {
			parent[i] = (parent[i - 1] || "") + parent[i]
			menu[parent[i]] = true
		})
		setSubMenuOpen({ ...menu })
	}
	const NavBar = (arr, id = "", prevPath = "") => {
		const Menu = id === ""
		return arr.map(
			({ name = "", path, subMenu }, i) => {
				name = name.ucwords()
				const viewId = (id + name + "-").replace(/\s/g, '')
				const viewPath = prevPath + path
				return subMenu ?
					<div className="menu flex flex-1 relative as-c" key={i}>
						<a
							style={{ cursor: 'pointer' }}
							onClick={() => {
								let exPath = viewPath
								const getPaths = (menu = []) => {
									if (menu.length > 0) {
										const w = getPaths(menu[0].subMenu)
										return `${menu[0].path}${w}`
									} else {
										return ''
									}
								}
								history.push(exPath + getPaths(subMenu), { noBanner: false })
							}}
							className={`${Menu && 'jc-c'} relative flex ai-c jc-sb flex flex-1 link ${window.location.href.includes(viewPath) && path !== "" && 'active'}`}
							onMouseEnter={() => openSubMenu(viewId)}
						>
							<div style={{ cursor: 'pointer' }} className={Menu && 'f-5'}>{name}</div>
							{!Menu && <i className="ml-3 c-grey fa fa-chevron-right" />}
						</a>
						<div className={`sub-menu ${Menu && 'tail'}`} style={{ display: subMenuOpen[viewId] ? 'block' : 'none' }}>
							{NavBar(subMenu, viewId, viewPath)}
						</div>
					</div> :
					<div className="menu flex flex-1 relative as-c" key={i}>
						<Link /* onClick={() => setNavOpen(!navOpen)} */ className={`${Menu && 'jc-c f-5'} flex flex-1 link ${window.location.href.includes(viewPath) && 'active'}`} onMouseEnter={() => openSubMenu(viewId)}
							to={{ pathname: viewPath, state: { noBanner: false } }}>{name}</Link>
					</div>
			}
		)
	}
	const [navOpen, setNavOpen] = useState(false)
	const [maxWidth, , isMobile] = useWindowSize()
	const effect = () => {
		if (isMobile) {
			setNavOpen(false)
		} else {
			setNavOpen(true)
		}
	}
	useEffect(effect, [maxWidth])
	return <div id="header" {...props} className={`w-full jc-sb flex bg-white ${className}`}>
		{Object.keys(subMenuOpen).length > 0 && <div className="black" onMouseEnter={() => setSubMenuOpen({})} />}
		<div className="xl:w-1/3 flex jc-sb ai-c pr-3">
			<Link to="/home">
				<img style={{ transform: 'scale(.8)', transformOrigin: 'center left' }} className="w-auto h-full" alt="" src={require('src/assets/images/logo-tau.png')} />
			</Link>
			{isMobile && <i style={{ cursor: 'pointer' }} onClick={() => setNavOpen(!navOpen)} className="p-2 bc-light brd-2 ion-navicon-round f-7" />}
		</div>
		{navOpen && <div className={`flex flex-1 menu-wrapper ${isMobile ? 'p-5' : ''}`}>
			{nav && NavBar(nav)}
		</div>}
	</div>
}

export default Header