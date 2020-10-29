import { useLayoutEffect, useState } from "react"

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight, window.innerWidth < 720]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

export const useToggle = (init) => {
	const [value, setToggle] = useState(init !== undefined ? init : false)
	return [value, () => setToggle(!value)]
}

export default useWindowSize