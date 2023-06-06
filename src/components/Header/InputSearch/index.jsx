import { StyledInputSearch } from './style'

import searchIcon from '../../../assets/icons/search.png'

export const InputSearch = ({ setInputSearch, onSubmit }) => {  
    return (
        <StyledInputSearch onSubmit={(event) => onSubmit(event)}>
            <input  
                type='text' 
                placeholder='Digite a pesquisa' 
                onChange={(event) => setInputSearch(event.target.value)} 
            />
            <button type='submit'>
                <img src={searchIcon} alt='Imagem de uma lupa na cor branca' />
            </button>
        </StyledInputSearch>
    )
}