import styled from 'styled-components'

export const StyledInputSearch = styled.form`
    position: relative;

    cursor: pointer;

    input[type="text"] {
        box-sizing: border-box;
        
        justify-content: space-between;
        align-items: center;

        padding: 0 5.5rem 0 .9375rem;
        gap: 115px;

        width: 365px;
        height: 60px;

        background-color: white;
        
        border: 2px solid var(--color-grey-100);
        border-radius: 8px;

        font-weight: 400;
        font-size: 1rem;
        line-height: 1.1875rem;
        
        ::placeholder {
            color: var(--color-grey-100);
    
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.1875rem;
        }
    }
    
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 53px;
        height: 40px;

        background-color: var(--color-color-primary);
        border: 2px solid var(--color-color-primary);
        border-radius: 8px;

        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);

        cursor: pointer;
    }

`