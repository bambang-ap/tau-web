import styled from "styled-components"

const Input = styled.input
	.attrs(
		() => {
			return {
				className: "brd-1 c-text p-4 w-full mb-3"
			}
		}
	)``

const Textarea = styled.textarea
	.attrs(
		() => {
			return {
				className: "w-full brd-1 p-4 mb-3"
			}
		}
	)``

export { Input, Textarea }