import styled from 'styled-components'

export const StyledProductsList = styled.ul`
    height: 50rem;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;

    @media (max-width: 1100px) {
        overflow-x: auto;

        height: 25.5rem;
        
        flex-wrap: nowrap;
    }
`