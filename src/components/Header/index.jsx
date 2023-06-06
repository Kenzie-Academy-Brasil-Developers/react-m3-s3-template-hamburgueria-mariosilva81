import { ImageContainer } from '../fragments/ImageContainer'
import { Cart } from './Cart'
import { InputSearch } from './InputSearch'

import { StyledHeader } from './style'

import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <ImageContainer src={logo} alt='Logo Burguer Kenzie, sendo Burguer na cor preto e Kenzie na cor vermelho coral' />
                <Cart />    
            </div>
            <InputSearch />       
        </StyledHeader>
    )
}