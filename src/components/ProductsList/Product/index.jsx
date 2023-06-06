import { StyledProduct } from './style'
import { ImageContainer } from '../../fragments/ImageContainer'

import { StyledBody600, StyledCaption, StyledHeading3 } from '../../../styles/typography'


export const Product = ({ product }) => {
    return (
        <StyledProduct>
            <ImageContainer src={product.img} alt={product.name} />
            <StyledHeading3>{product.name}</StyledHeading3>
            <StyledCaption>{product.category}</StyledCaption>
            <StyledBody600>{product.price}</StyledBody600>
            <button>Adicionar</button>            
        </StyledProduct>
    )
}