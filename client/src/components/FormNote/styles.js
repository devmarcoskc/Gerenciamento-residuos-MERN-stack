import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 5px 40px;
    max-width: 70%;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};

    h3 {
        font-size: 24px;
        font-weight: bold;
        color: ${colors.orange.primary};
    }

    label {
        font-size: 18px;
        color: ${colors.orange.primary};
        margin-bottom: 5px;
    }

    input {
        max-width: 60%;
        outline: 0;
        padding: 10px 2px;
        font-size: 17px;
        color: ${colors.green.primary};
        border: none;
        border-bottom: 1px solid ${colors.orange.primary};
        margin-bottom: 5px;
    }

    input::placeholder {
        color: ${colors.orange.terciary};
        font-size: 15px;
    }

    textarea {
        max-width: 60%;
        border: 1px solid ${colors.orange.primary};
        height: 150px;
        padding: 10px;
        outline: 0;
        font-size: 15px;
        color: ${colors.green.primary};
        margin-bottom: 5px;
    }

    textarea::placeholder {
        font-size: 14px;
        color: ${colors.orange.terciary};
    }

    span {
        font-size: 13px;
        color: red;
        font-weight: bold;
    }

    button {
        max-width: 40%;
        font-size: 17px;
        background-color: ${colors.orange.secondary};
        padding: 15px;
        border: none;
        border-radius: 15px;
        color: white;
        margin: 20px 0px;
        cursor: pointer;
        transition: all ease .7s;
        opacity: 0.85;

        &:hover {
            opacity: 1;
        }
    }
`;

export const Container = styled.div`
    
`