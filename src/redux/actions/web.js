import store from ".."

const actionsWeb = (data) => {
	return {
		type: 'GET_WEB',
		payload: data
	}
}

const setActivePath = data => {
	const { Web: webState } = store.getState()
	const activePath = [...webState.activePath, ...data]
	store.dispatch(actionsWeb({ ...webState, activePath }))
}

export default actionsWeb

export { setActivePath }