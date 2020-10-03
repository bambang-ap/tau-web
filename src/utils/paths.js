import { FILE_PATH } from './api';

// eslint-disable-next-line no-extend-native
String.prototype.replacePath = function (toPath) {
	if (toPath) {
		return this.replace(/\$FILE_PATH/g, FILE_PATH)
	}
	const regex = new RegExp(FILE_PATH, 'g')
	return this.replace(regex, '$FILE_PATH')
}

export const substr = (txt = '', length) => txt ? txt.length > length ? `${txt.substr(0, length)}...` : txt : ''

export const btnClass = "b-1 shadow-md p-2 pl-10 pr-10 brd-1"