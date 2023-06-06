import { StyledInputSearch } from './style'

import searchIcon from '../../../assets/icons/search.png'

export const InputSearch = () => {
    return (
        <StyledInputSearch>
            <input  type='text' placeholder='Digite a pesquisa' />
            <div>
                <img src={searchIcon} alt='Imagem de uma lupa na cor branca' />
            </div>
        </StyledInputSearch>
    )
}