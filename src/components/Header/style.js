import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */

    background-color: var(--color-grey-0);

    padding: .625rem 7.3125rem .625rem 7.4431rem;

    div:first-child {
        width: 100%;
        height: 3.75rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-right: 1.5rem;
    }
`