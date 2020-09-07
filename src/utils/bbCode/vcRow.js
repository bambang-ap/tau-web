import React from 'react';
import parser, { Tag } from "bbcode-to-react";

export default class customBbTag extends Tag {
	toReact() {
		const children = parser.toReact(this.getContent(true))
		return (
			<div {...this.params}>{children}</div>
		)
	}
}

export class gdgg extends Tag {
	toReact(){
		return <div {...this.params}></div>
	}
}