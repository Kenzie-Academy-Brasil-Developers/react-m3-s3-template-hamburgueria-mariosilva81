import { StyledProduct } from './style'

import { ImageContainer } from '../../fragments/ImageContainer'

import {
    StyledBody600,
    StyledCaption,
    StyledHeading3,
} from '../../../styles/typography'

export const Product = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        addToCart(product)
    }

    const price = product.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <StyledProduct id={product.id}>
        <ImageContainer src={product.img} alt={product.name} />
        <div>
            <StyledHeading3>{product.name}</StyledHeading3>
            <StyledCaption>{product.category}</StyledCaption>
            <StyledBody600>{price}</StyledBody600>
            <button onClick={handleAddToCart}>Adicionar</button>
        </div>
        </StyledProduct>
    )
}