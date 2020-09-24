import styled from "styled-components"

const Button = styled.button
	.attrs(
		() => {
			return {
				className: `shadow c-text bc-light brd-1 p-2 pr-10 pl-10`
			}
		}
	)``

export { Button }