import { StyledModalCart } from './style'
import trash from '../../assets/icons/trash.png'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useKeyDown } from '../../hooks/useKeyDown'
import { StyledBody600, StyledHeading3 } from '../../styles/typography'
import { ImageContainer } from '../fragments/ImageContainer'

export const ModalCart = ({ setIsOpen, cartItems }) => {
	const modalRef = useOutsideClick(() => {
		setIsOpen(false)
	})

	const buttonRef = useKeyDown('Escape', (element) => {
		element.click()
	})

	return (
		<StyledModalCart role="dialog">
		<div ref={modalRef}>
			<div className='header-container'>
				<StyledHeading3>Carrinho de compras</StyledHeading3>
				<button
				ref={buttonRef}
				type='submit'
				onClick={(event) => {
					event.preventDefault()
					setIsOpen(false)
				}}
				>X</button>
			</div>
			<ul className='product-container'>
				{cartItems.map((item) => (
					<li key={item.id}>
						<ImageContainer src={item.img} alt={item.name}/>
						<StyledHeading3>{item.name}</StyledHeading3>
						<ImageContainer src={trash} alt='Icone na cor cinza representando uma lixeira'/>
					</li>
				))}
			</ul>
			<div className='total-container'>
				<StyledBody600>Total</StyledBody600>
				<StyledBody600>0</StyledBody600>
			</div>
			<div className='button-container'>
				<button>Remover todos</button>
			</div>
		</div>
		</StyledModalCart>
	)
}