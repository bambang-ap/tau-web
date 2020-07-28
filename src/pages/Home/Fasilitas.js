import React from 'react';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const Fasilitas = props => {
	return <Flexbox flex="1" className="fasilitas">
		<Flexbox justifyContent="center" flexDirection="column">
			<Flexbox element="h3">Staff & Pengajar</Flexbox>
			<Flexbox>Exercitation eiusmod amet ad nisi incididunt deserunt est laborum amet. Excepteur nostrud cupidatat</Flexbox>
			<Flexbox element="button" alignSelf="center">Lihat Semua</Flexbox>
		</Flexbox>
		<Box />
		<Box />
		<Box />
	</Flexbox>
}

export default Fasilitas