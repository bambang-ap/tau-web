import React, { useState } from 'react';

const Select = ({ wrapperClass = "", renderSelect, onSelect = () => { }, value = "", render = () => { }, data }) => {
	const [visible, setVisible] = useState(false)
	const ViewSelect = () => data.rMap((item, i) => <div className={`p-3 w-full ${wrapperClass}`} onClick={() => {
		setVisible(false)
		onSelect({ item, i, index: i })
	}}>
		{render({ item, i, index: i })}
	</div>)
	return renderSelect ? <div className="flex flex-col" onClick={() => setVisible(!visible)}>
		<div className="brd-1 w-full b-1 p-3 ai-c jc-sb flex">
			{value}
			<i className={`fa ml-5 fa-chevron-${visible ? 'up' : 'down'}`} />
		</div>
		<div style={!visible ? { display: 'none' } : {}} className="w-full relative">
			<div style={{ top: -1 }} className="bc-light b-1 absolute w-full b-bblrd-5 b-bbrrd-5">
				<ViewSelect />
			</div>
		</div>
	</div> : <ViewSelect />
}

export default Select