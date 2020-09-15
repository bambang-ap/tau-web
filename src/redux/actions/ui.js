import { getS1Kategori, getS1 } from 'src/utils/api'
import store from 'src/redux'
import actionsWeb from 'src/redux/actions/web'

const actionUi = () => {
	return {
		type: 'GET_UI',
		payload: new Promise(async resolve => {
			let ui = require('src/assets/ui.json')
			const { data: category } = await getS1Kategori()
			const promises = category.map(async cat => {
				const { data } = await getS1({ id_program: cat.id })
				return { ...cat, data }
			})
			const programS1 = await Promise.all(promises)
			store.dispatch(actionsWeb({ programS1 }))
			ui.nav = ui.nav.map(nav => {
				if (nav.name === 'Akademik' && nav.path === "") {
					nav.subMenu = nav.subMenu.map(sub => {
						if (sub.path === '/akademik/s1') {
							sub.subMenu = programS1.map(s1 => {
								return {
									name: s1.nama,
									path: "/" + s1.id,
									subMenu: s1.data.map(data => {
										return { name: data.nama_prodi, path: "/" + data.id }
									})
								}
							})
						}
						return sub
					})
					return nav
				}
				return nav
			})
			resolve(ui)
		})
	}
}

export default actionUi