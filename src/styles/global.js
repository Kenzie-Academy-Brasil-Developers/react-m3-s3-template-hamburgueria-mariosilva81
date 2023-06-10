import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-primary-2: #93D7AF;
        --color-color-secondary: #EB5757;

        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-200: #BDBDBD;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;

        --font-family: 'Inter', sans-serif;
    }

    .root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 2rem 7.3125rem;

        box-sizing: border-box;

        @media (max-width: 900px) {
            margin: 1rem 2rem;
        }
        
        h1 {
            font-size: 1.5rem;
            
            display: flex;
            align-items: center;
            justify-content: center;  
        }
    }
`