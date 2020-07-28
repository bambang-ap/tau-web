import React from 'react';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const Sambutan = props => {
	return <div {...props} className="sambutan">
		<Flexbox justifyContent="center" element="h3">Sambutan Rektor TAU</Flexbox>
		<Flexbox flex="1">
			<Box />
			<Flexbox alignSelf="center">Nisi consectetur nulla non cupidatat nisi culpa dolor excepteur. Ut id non laborum pariatur commodo amet. Commodo cupidatat fugiat anim eiusmod velit occaecat commodo et. Labore ut veniam exercitation Lorem Lorem mollit elit sunt ullamco qui mollit labore ipsum. Velit velit fugiat culpa cillum sit. Ex magna nostrud in mollit. Amet dolor voluptate sint aliquip duis sit ipsum elit qui dolor culpa culpa.</Flexbox>
		</Flexbox>
	</div>
}

export default Sambutan