import styled from 'styled-components'

export const StyledModal = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        position: fixed;
        inset: 0;
        background-color: rgba(0,0,0,.25);
        backdrop-filter: blur(.3125rem);
    
    div {
        width: 100%;
        max-width: 500px;
        position: relative;
        padding: 2rem;
        background: white;
    }

    button {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
    }
`