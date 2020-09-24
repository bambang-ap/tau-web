const imgSize = src => {
	return new Promise((resolve, error) => {
		if (!src) {
			error('Image not found!')
			return
		}
		let img = new Image()
		img.onerror = err => error(err)
		img.onload = () => {
			const { height, width } = img
			resolve([width, height, width > height])
		}
		img.src = src
	})
}

export { imgSize }