import React from 'react';
import useWindowSize from 'src/utils/windowSize';

const Modal = ({ className = "", onClickBlack, visible, children }) => {
	const [width, height] = useWindowSize()
	return visible && <div style={{ width, height, top: 0, zIndex: 999 }} className={`flex fixed ${className}`}>
		<div onClick={onClickBlack} style={{ width, height, zIndex: 1, background: 'rgba(0,0,0,.5)' }} className="absolute" />
		{React.cloneElement(children, {
			style: {
				zIndex: 5,
				...children.props.style
			}
		})}
	</div>
}

export default Modal