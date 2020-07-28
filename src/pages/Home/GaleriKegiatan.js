import React from 'react';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const GaleriKegiatan = props => {
	return <Flexbox flex="1" className="galeri-kegiatan" flexDirection="column">
		<Flexbox justifyContent="center" element="h3">Galeri Kegiatan</Flexbox>
		<Flexbox justifyContent="center">Dokumentasi kegiatan kampus</Flexbox>
		<Flexbox flex="1">
			<Box />
			<Box />
			<Box />
			<Box />
		</Flexbox>
		<Flexbox flex="1">
			<Box />
			<Box />
			<Box />
			<Box />
		</Flexbox>
	</Flexbox>
}

export default GaleriKegiatan