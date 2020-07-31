import reducerProducts from './products';
import reducerUi from './ui';

const { combineReducers } = require("redux");

const webReducer = combineReducers({
	Product: reducerProducts,
	UI: reducerUi
})

export default webReducer