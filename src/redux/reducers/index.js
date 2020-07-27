import reducerProducts from './products';

const { combineReducers } = require("redux");

const webReducer = combineReducers({
	Product: reducerProducts
})

export default webReducer