import { useState } from 'react'

import { ImageContainer } from '../../fragments/ImageContainer'

import { StyledCart } from './style'

import { StyledBody600 } from '../../../styles/typography'

import cartIcon from '../../../assets/icons/cart.png'

export const Cart = () => {
    const [totalCart, setTotalCart] = useState(0)

    return (
        <StyledCart>
            <ImageContainer src={cartIcon} alt='Imagem de um carrinho de compras na cor cinza'>
                <StyledBody600>{totalCart}</StyledBody600>
            </ImageContainer>
        </StyledCart>
    )
}