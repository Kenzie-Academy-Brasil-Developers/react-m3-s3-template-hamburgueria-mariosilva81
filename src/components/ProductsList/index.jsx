import { ModalCart } from '../ModalCart'
import { Product } from './Product'

import { StyledProductsList } from './style'

import React, { useState } from 'react'

export const ProductsList = ({ products, isLoading, isModal, setIsModal }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems([...cartItems, product])
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <StyledProductsList>
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
            </StyledProductsList>
            {isModal ?
				<ModalCart setIsOpen={setIsModal} cartItems={cartItems}>
				</ModalCart>
			: null}
        </>
    )
}