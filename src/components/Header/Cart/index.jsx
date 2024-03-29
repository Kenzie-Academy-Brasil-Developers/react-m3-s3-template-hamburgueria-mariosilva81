import { ImageContainer } from '../../fragments/ImageContainer'
import { StyledCart } from './style'
import { StyledBody600 } from '../../../styles/typography'
import cartIcon from '../../../assets/icons/cart.png'

export const Cart = ({ setIsModal, counterCart }) => {
    return (
        <StyledCart>
            <ImageContainer 
                onClick={() => setIsModal(true)} 
                src={cartIcon} 
                alt='Imagem de um carrinho de compras na cor cinza'
            >
                <StyledBody600>{counterCart}</StyledBody600>
            </ImageContainer>
        </StyledCart>
    )
}
