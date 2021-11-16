import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        height:100vh;

        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
    }
    
    .container{
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        width: 60%;
        padding: 50px;        
    }

    .border{
        border: 3px solid;
        padding: 0.25em 0.5em;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    }

    .input{
        margin: 10px;
        width: 300px;
        height: 30px;

        font-family: "Open Sans", sans-serif;
        font-size: 10px;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .password{
        text-transform: none;
    }

    .errorMessage{
        text-align: center;
        font-size: 10px;
        max-width: 250px;
    }

    .button {
        display: flex;


        cursor: pointer;
        border: 3px solid;
        padding: 0.25em 0.5em;
        box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;

        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        }

    .button:active {
        box-shadow: 0px 0px 0px 0px;
        top: 5px;
        left: 5px;
        }

    @media (min-width: 768px) {
        .button-54 {
            padding: 0.25em 0.75em;
        }
        }
`;
