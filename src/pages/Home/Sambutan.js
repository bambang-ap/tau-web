import React from 'react';

const Sambutan = ({ className, ...props }) => {
	return <div {...props} id="sambutan" className={`ai-c flex flex-col ${className}`}>
		<h4>Sambutan Rektor TAU</h4>
		<div className="flex ai-c mt-5 pl-15 pr-15">
			<div className="brd-3 o-h w-80">
				<img alt="" src={require('src/assets/images/1-1.jpg')} />
			</div>
			<div className="pl-5">
				<p className="mb-5">Duis consequat labore ullamco quis non aute qui cupidatat sunt nisi tempor est cillum.</p>
				<p className="mb-5">Duis conseExercitation amet ex ullamco reprehenderit ad cupidatat non.quat labore ullamco quis non aute qui cupidatat sunt nisi tempor est cillum.</p>
				<p className="mb-5">Duis consequat labore ullamco quis non aute qui cupidatat sunt nisi tempor est cillum.</p>
				<p>Duis consequat labore ullamco quis non aute qui cupidatat sunt nisi tempor est cillumVeniam excepteur culpa dolor minim eiusmod adipisicing ad amet aute nulla sint..</p>
			</div>
		</div>
	</div>
}

export default Sambutan