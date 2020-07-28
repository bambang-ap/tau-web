import React from 'react';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const StaffPengajar = props => {
	return <Flexbox flex="1" className="staff-pengajar">
		<Box />
		<Box />
		<Box />
		<Flexbox justifyContent="center" flexDirection="column">
			<Flexbox element="h3">Staff & Pengajar</Flexbox>
			<Flexbox>Exercitation eiusmod amet ad nisi incididunt deserunt est laborum amet. Excepteur nostrud cupidatat</Flexbox>
		</Flexbox>
	</Flexbox>
}

export default StaffPengajar