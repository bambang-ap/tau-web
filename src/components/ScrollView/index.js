import React from 'react';
import './ScrollView.scss'
import Flexbox from 'flexbox-react';

const ScrollView = props => {
	return <Flexbox className="scroll-view">
		<Flexbox class="wrapper">
			<Flexbox class="content" {...props} />
		</Flexbox>
	</Flexbox>
}

export default ScrollView