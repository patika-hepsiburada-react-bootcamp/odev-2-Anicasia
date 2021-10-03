import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-bodybg: #b59ae0;
        --color-blue: #c672ea;
        --color-darkgrey: #3f4b7c;
        --color-lightgrey: #bce2f4;
        --color-humanbody: #FFDED7;
        --color-shirtLeft: pink;
        --color-shirtRight: pink;
        --color-appbg: #F5F5F5;
        --color-white: #FFFFFF;
        --color-yellow: #FFB800;
        --font-size-default: 14px;
        --font-size-large: 36px;
    }

    html{
        height: 100%;
        width: 100%;
    }
    
    body {
        font-weight: bold;
        font-size: var(--font-size-default);
        background-color: var(--color-bodybg);
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        width: 100%;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`
