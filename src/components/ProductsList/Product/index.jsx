import { StyledProduct } from './style'
import { ImageContainer } from '../../fragments/ImageContainer'

import { StyledBody600, StyledCaption, StyledHeading3 } from '../../../styles/typography'


export const Product = ({ product }) => {
    const price = product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    return (
        <StyledProduct>
            <ImageContainer src={product.img} alt={product.name} />
            <div>
                <StyledHeading3>{product.name}</StyledHeading3>
                <StyledCaption>{product.category}</StyledCaption>
                <StyledBody600>{price}</StyledBody600>
                <button>Adicionar</button>            
            </div>
        </StyledProduct>
    )
}