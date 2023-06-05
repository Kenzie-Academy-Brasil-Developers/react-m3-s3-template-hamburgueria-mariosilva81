import styled from 'styled-components'

export const StyledCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
        width: 1.5625rem;
        height: 1.5625rem;
    }

    span {
        position: absolute;
        top: -15px;
        left: 15px;

        background-color: var(--color-color-primary );
        color: white;

        border-radius: .4375rem;

        width: 1.25rem;
        height: 1.5rem;

        text-align: center;
    }
`