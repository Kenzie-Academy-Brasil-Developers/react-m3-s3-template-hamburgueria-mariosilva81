import { ImageContainer } from '../fragments/ImageContainer'
import { Cart } from './Cart'
import { InputSearch } from './InputSearch'

import { StyledHeader } from './style'

import logo from '../../assets/images/logo.png'

import { useState } from 'react'

export const Header = ({ callback }) => {
    const [inputSearch, setInputSearch] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(inputSearch)
    }
    
    return (
        <StyledHeader >
            <div>
                <ImageContainer src={logo} alt='Logo Burguer Kenzie, sendo Burguer na cor preto e Kenzie na cor vermelho coral' />
                <Cart />    
            </div>
            <InputSearch onSubmit={handleSubmit} setInputSearch={setInputSearch}/>       
        </StyledHeader>
    )
}