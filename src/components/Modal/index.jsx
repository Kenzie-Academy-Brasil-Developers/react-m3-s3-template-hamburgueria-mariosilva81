import { useEffect, useRef } from 'react'
import { StyledModal } from './style'

export const Modal = ({ children, setIsOpen }) => {
	const modalRef = useRef(null)

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (modalRef.current && !modalRef.current.contains	(event.target)) {
				setIsOpen(false)
			}
		}

		const handleEscapeKey = (event) => {
			if (event.keyCode === 27) {
				setIsOpen(false)
			}
		};

		document.addEventListener('mousedown', handleOutsideClick)
		document.addEventListener('keydown', handleEscapeKey)

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
			document.removeEventListener('keydown', handleEscapeKey)
		};
	}, [setIsOpen])

	return (
		<StyledModal role="dialog">
		<div ref={modalRef}>
			<button
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