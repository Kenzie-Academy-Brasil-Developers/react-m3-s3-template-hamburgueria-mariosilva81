import { StyledModal } from './style'

import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useKeyDown } from '../../hooks/useKeyDown'

export const Modal = ({ children, setIsOpen, cartList }) => {
	const modalRef = useOutsideClick(() => {
		setIsOpen(false)
	})

	const buttonRef = useKeyDown('Escape', (element) => {
		element.click()
	})

	return (
		<StyledModal role="dialog">
		<div ref={modalRef}>
			<button
			ref={buttonRef}
			type="submit"
			onClick={(event) => {
				event.preventDefault();
				setIsOpen(false);
			}}
			>X</button>
			{children}
		</div>
		</StyledModal>
	)
}