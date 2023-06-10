import { useState, useEffect } from 'react'
import { StyledModalCart } from './style'
import trash from '../../assets/icons/trash.png'
import emptyCart from '../../assets/images/empty-cart.png'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useKeyDown } from '../../hooks/useKeyDown'
import { StyledBody600, StyledHeading3 } from '../../styles/typography'
import { ImageContainer } from '../fragments/ImageContainer'
import { notifySuccess } from '../../hooks/Toast'

export const ModalCart = ({ 
		setIsOpen, 
		cartItems, 
		setCartItems,
		removeFromCart,
		setCounterCart
	}) => {
  	const [total, setTotal] = useState(0)

  	const modalRef = useOutsideClick(() => {
    	setIsOpen(false)
  	})

	const buttonRef = useKeyDown('Escape', (element) => {
		element.click()
	})

	const handleRemoveFromCart = (itemId) => {
		removeFromCart(itemId)
	}

	const handleRemoveAllFromCart = () => {
		setCounterCart(0)
		setCartItems([])
		notifySuccess('Todos os itens removidos do carrinho!')
	}

	useEffect(() => {
		const totalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price, 0)
		setTotal(totalPrice)
	}, [cartItems])

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
			{cartItems.length === 0 ? 
				(<ImageContainer src={emptyCart} alt='Imagem de um carrinho de compras vazio' />) :	(
				<>
					<ul className='product-container'>
					{cartItems.map((item) => (
						<li key={item.id}>
							<ImageContainer src={item.img} alt={item.name} />
							<div>
							<StyledHeading3>{item.name}</StyledHeading3>
							<img
								src={trash}
								alt='Icone na cor cinza representando uma lixeira'
								onClick={() => handleRemoveFromCart(item.id)}
							/>
							</div>
						</li>
					))}
					</ul>
					<div className='total-container'>
						<StyledBody600>Total</StyledBody600>
						<StyledBody600>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})}</StyledBody600>
					</div>
					<div className='button-container'>
						<button onClick={handleRemoveAllFromCart}>Remover todos</button>
					</div>
				</>
				)
			}
		</div>
		</StyledModalCart>
	)
}