import { ImageContainer } from '../fragments/ImageContainer'
import { Cart } from './Cart'
import { InputSearch } from './InputSearch'

import { StyledHeader } from './style'

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <ImageContainer src='../src/assets/images/logo.png' alt='Logo Burguer Kenzie, sendo Burguer na cor preto e Kenzie na cor vermelho coral' />
                <Cart />    
            </div>
            <InputSearch />       
        </StyledHeader>
    )
}