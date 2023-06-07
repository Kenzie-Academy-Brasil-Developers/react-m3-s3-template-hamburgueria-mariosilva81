import { useState } from 'react'

import { ImageContainer } from '../../fragments/ImageContainer'

import { StyledCart } from './style'

import { StyledBody600 } from '../../../styles/typography'

import cartIcon from '../../../assets/icons/cart.png'

export const Cart = ({ totalCart }) => {
    return (
        <StyledCart>
            <ImageContainer src={cartIcon} alt='Imagem de um carrinho de compras na cor cinza'>
                <StyledBody600>{totalCart}</StyledBody600>
            </ImageContainer>
        </StyledCart>
    )
}
