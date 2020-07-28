import React from 'react';
import './ScrollView.scss'
import Flexbox from 'flexbox-react';

const ScrollView = ({ className, ...props }) => {
	return <Flexbox className="scroll-view">
		<Flexbox className="wrapper">
			<Flexbox className={`content ${className}`} {...props} />
		</Flexbox>
	</Flexbox>
}

export default ScrollView