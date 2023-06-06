import styled from 'styled-components'

export const StyledProduct = styled.li`
    border: 1px solid red;
    width: 200px;
    height: 300px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    figure, img {
        box-sizing: border-box
    }
`