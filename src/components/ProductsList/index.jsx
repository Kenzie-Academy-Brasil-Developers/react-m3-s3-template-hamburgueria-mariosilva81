import { ModalCart } from '../ModalCart'
import { notifyError, notifySuccess } from '../../hooks/Toast'
import { Product } from './Product'
import { StyledProductsList } from './style'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const ProductsList = ({ 
        products, 
        isLoading, 
        isModal, 
        setIsModal, 
        counterCart, 
        setCounterCart 
    }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id)
      
        if (isProductInCart) {
            notifyError(`${product.name} já foi adicionado ao carrinho!`)
        } else {
            setCartItems([...cartItems, product])
            setCounterCart(counterCart + 1)
            notifySuccess(`${product.name} foi adicionado ao carrinho!`)
        }
    }
      
    const removeFromCart = (itemId, product) => {
		setCartItems(cartItems.filter(item => item.id !== itemId))
        setCounterCart(counterCart - 1)
        notifySuccess('Item removido do carrinho!')
	}

    if (isLoading) {
        return <h1>Carregando produtos...</h1>
    }

    return (
        <>
            <StyledProductsList>
                {products.map((product) => (
                    <Product 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                    />
                ))}
            </StyledProductsList>
            {isModal ?
				<ModalCart 
                    setIsOpen={setIsModal} 
                    cartItems={cartItems} 
                    setCartItems={setCartItems}
                    removeFromCart={removeFromCart}
                    setCounterCart={setCounterCart}
                >
				</ModalCart>
			: null}
            <ToastContainer></ToastContainer>
        </>
    )
}