const initState = {
	data: [],
	isError: false,
	isLoading: false
}

const reducerProducts = (state = initState, actions) => {
	switch (actions.type) {
		case 'GET_PRODUCT':
			return {
				...state,
				data: actions.payload,
				isLoading: true
			}
		case 'GET_PRODUCT_FULFILLED':
			return {
				...state,
				data: actions.payload,
				isLoading: false
			}
		case 'GET_PRODUCT_REJECTED':
			return { ...initState }
		default: return state
	}
}

export default reducerProducts