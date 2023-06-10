import styled from 'styled-components'

export const StyledModalCart = styled.div`
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
        background: white;
        box-sizing: border-box;
        height: 25.6875rem;
        
        .header-container {
            position: relative;
            background-color: var(--color-primary);
            height: 3.375rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .8125rem 1.375rem;

            h3 {
                color: white;
            }

            button {
                color: rgba(255, 255, 255, 0.5);
                background-color: transparent;
                border: none;
                cursor: pointer;
            }
        }

        .product-container {
            height: 60%;
            padding: 1.25rem 1.5rem 1.125rem;
            overflow-y: auto;
        }

        .total-container {
            border-top: 2px solid var(--color-grey-100);
            height: 15%;
            width: 452px;
            
            padding: 1.25rem 0 1.125rem;
            margin: 0 1.5625rem;

            display: flex;
            justify-content: space-between;

            span + span {
                color: var(--color-grey-300);
            }
        }

        .button-container {
            height: 20%;
            padding: 0 1.4375rem 1rem;

            button {
                height: 3.75rem;
                width: 100%;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0 1.25rem;

                font-weight: 600;
                font-size: 16px;

                background-color: var(--color-grey-100);
                color: var(--color-grey-300);
                
                border: .125rem solid var(--color-grey-100);
                border-radius: 8px;

                cursor: pointer;

                :hover {
                    background-color: var(--color-grey-300);
                    color: var(--color-grey-100);

                    border: .125rem solid var(--color-grey-300);
                }
            }
        }
    }

    figure {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 18.75rem;
        }
    }
`