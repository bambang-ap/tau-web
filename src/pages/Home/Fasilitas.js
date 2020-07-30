import React from 'react';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const Fasilitas = props => {
	return <Flexbox flex="1" className="fasilitas pt-10 pb-10">
		<Flexbox justifyContent="center" flexDirection="column">
			<Flexbox element="h3">Staff & Pengajar</Flexbox>
			<Flexbox className="mt-3 mb-2">Exercitation eiusmod amet ad nisi incididunt deserunt est laborum amet. Excepteur nostrud cupidatat</Flexbox>
			<Flexbox element="button" alignSelf="flex-start">Lihat Semua</Flexbox>
		</Flexbox>
		<Flexbox flexDirection="column" className="p-3">
			<img alt="" className="img-full" src={require('src/assets/images/1-1.jpg')} />
			gdshkfjjsdfh
		</Flexbox>
		<Flexbox flexDirection="column" className="p-3">
			<img alt="" className="img-full" src={require('src/assets/images/1-1.jpg')} />
			gdshkfjjsdfh
		</Flexbox>
		<Flexbox flexDirection="column" className="p-3">
			<img alt="" className="img-full" src={require('src/assets/images/1-1.jpg')} />
			gdshkfjjsdfh
		</Flexbox>
	</Flexbox>
}

export default Fasilitas