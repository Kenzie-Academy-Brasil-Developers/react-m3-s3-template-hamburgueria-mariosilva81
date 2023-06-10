import styled from 'styled-components'

export const StyledProduct = styled.li`
    border: .125rem solid var(--color-grey-100);
    border-radius: .3125rem;
    
    min-width: 16rem;
    height: 21.625rem;

    box-sizing: border-box;

    :hover {
        border: .125rem solid var(--color-primary);

        scale: 1.1;

        button {
            background-color: var(--color-primary);
            
            border: .125rem solid var(--color-primary);
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .875rem;

        margin: 1.3125rem;

        span {
            color: var(--color-grey-300);
        }

        span + span {
           color: var(--color-primary); 
        }

        button {
            padding: 0 1.25rem;

            width: 6.625rem;
            height: 2.5rem;

            background-color: var(--color-grey-200);
            
            border: .125rem solid var(--color-grey-200);
            border-radius: .5rem;

            color: white;

            cursor: pointer;

            font-size: .875rem;
            font-weight: 600;

            :hover {
                background-color: var(--color-primary-2);

                border: .125rem solid var(--color-primary-2);
            }
        }
    }

    figure {
        background-color: var(--color-grey-0);

        width: 100%;
        height: 9.375rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
        } 
    }
`