import React from 'react';
import Flexbox from 'flexbox-react';
import Box from 'src/components/Box';

const Kontak = props => {
	return <Flexbox flex="1" className="kontak">
		<Flexbox flex="1" justifyContent="center">
			<Box color="yellow" />
		</Flexbox>
		<Flexbox flex="1" justifyContent="center">
			<div>
				<Flexbox>Kontak Kami</Flexbox>
				<Flexbox>Tanri Abeng University</Flexbox>
				<Flexbox>Jl. jhdsfkjlsdfds fjhdsfkljsfd kkjldhjksdfh dsjkfhkshd fs df sdkjfh kjdshkjf jdsf jsdjfhkjsdhfjkh dsf</Flexbox>
				<Flexbox>telephone</Flexbox>
				<Flexbox>email</Flexbox>
				<Flexbox>
					Detail<br />
					Laborum velit et cillum officia minim nisi duis consectetur velit occaecat Lorem aliqua aute sit. Proident eu dolor tempor non dolor in qui quis aliqua. Ullamco magna dolore nostrud magna officia nisi magna. Anim in cillum dolore do sunt qui occaecat. Voluptate Lorem quis tempor id ipsum elit in eiusmod. Laborum non excepteur consequat laborum cillum culpa sint fugiat aliqua elit id.
				</Flexbox>
				<form>
					<Flexbox>
						<Flexbox element="input" />
						<Flexbox element="input" />
					</Flexbox>
					<Flexbox element="textarea" />
					<Flexbox element="button">KIRIM</Flexbox>
				</form>
			</div>
		</Flexbox>
	</Flexbox>
}

export default Kontak