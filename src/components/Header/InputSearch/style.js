import styled from 'styled-components'

export const StyledInputSearch = styled.form`
    position: relative;

    cursor: pointer;

    input[type="text"] {
        box-sizing: border-box;
        
        justify-content: space-between;
        align-items: center;

        padding: 0 5.5rem 0 .9375rem;
        gap: 7.1875rem;

        width: 22.8125rem;
        height: 3.75rem;

        background-color: white;
        
        border: .125rem solid var(--color-grey-100);
        border-radius: .5rem;

        font-weight: 400;
        font-size: 1rem;
        line-height: 1.1875rem;

        outline: none;

        :focus {
            border: .125rem solid var(--color-grey-600);
        }
        
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

        background-color: var(--color-primary);
        border: .125rem solid var(--color-primary);
        border-radius: .5rem;

        position: absolute;
        top: 50%;
        right: .75rem;
        transform: translateY(-50%);

        cursor: pointer;
    }

`