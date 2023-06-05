import { StyledInputSearch } from './style'

export const InputSearch = () => {
    return (
        <StyledInputSearch>
            <input  type='text' placeholder='Digite a pesquisa' />
            <div>
                <img src='./src/assets/icons/search.png' alt='Imagem de uma lupa na cor branca' />
            </div>
        </StyledInputSearch>
    )
}