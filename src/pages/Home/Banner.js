import React from 'react';
import Flexbox from 'flexbox-react';

const Banner = props => {
	return <div {...props} className="banner">
		<Flexbox justifyContent="space-between" flex="1" className="info">
			<Flexbox flex="1">xxxxxxxxxxxxxxxxxxxxxxx</Flexbox>
			<Flexbox flex="1">Sistem Informasi Akademik</Flexbox>
			<Flexbox flex="1">xxxxxxxxxxxxxxxxxxxxxxx</Flexbox>
		</Flexbox>
		<Flexbox className="image" />
	</div>
}

export default Banner