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
`