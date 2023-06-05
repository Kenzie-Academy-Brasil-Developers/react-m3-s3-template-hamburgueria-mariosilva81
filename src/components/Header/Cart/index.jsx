import { useState } from 'react'

import { ImageContainer } from '../../fragments/ImageContainer'

import { StyledCart } from './style'

import { StyledBody600 } from '../../../styles/typography'

export const Cart = () => {
    const [totalCart, setTotalCart] = useState(0)

    return (
        <StyledCart>
            <ImageContainer src='./src/assets/icons/cart.png' alt='Imagem de um carrinho de compras na cor cinza'>
                <StyledBody600>{totalCart}</StyledBody600>
            </ImageContainer>
        </StyledCart>
    )
}