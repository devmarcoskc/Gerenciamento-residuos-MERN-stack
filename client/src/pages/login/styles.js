import styled from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Container = styled.div`
    min-height: 100vh;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0;

    @media(max-width: 768px) {
        min-height: 100vh;
        width: 80%;
        margin: auto;
        line-height: 1.2;
    }
`;

export const Image = styled.img`
    @media(max-width: 768px) {
        transform: scale(0.90);
        margin-top: 10px;
    }
`

export const P = styled.p`
    font-size: 22px;
    color: ${colors.orange.secondary};

    @media(max-width: 768px) {
        font-size: 16px;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: 50px;
    line-height: 0px;
`;

export const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0px;
    margin-bottom: 10px;

    label {
        color: ${colors.orange.secondary};
        font-size: 19px;
        margin-bottom: 10px;
    }

    input {
        outline: 0;
        margin-bottom: 20px;
        width: 100%;
        height: 40px;
        font-size: 16px;
        border: 0;
        border-bottom: 1px solid ${colors.orange.primary};
        padding: 1px;
        color: ${colors.green.secondary}
    }

    input::placeholder {
        color: ${colors.orange.terciary};
        font-size: 15px;
    }

    span {
        font-size: 13px;
        color: red;
        margin-bottom: 10px;
        font-weight: bold;
    }

    @media(max-width: 768px) {
        input {
            width: 100%;
        }
    }
`;

export const Button = styled.button`
    width: 300px;
    padding: 15px;
    background-color: ${colors.green.primary};
    font-size: 17px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: white;
    transition: all ease .7s;

    &:hover {
        background-color: ${colors.green.secondary}
    }

    @media(max-width: 768px) {
        width: 90%;
    }
`;

export const TextToRegisterArea = styled.div`
    display: flex;
    font-size: 18px;
    margin-top: 20px;
    color: ${colors.orange.secondary};

    span {
        color: ${colors.green.primary};
        text-decoration: underline;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        font-size: 16px;
    }
`;

export const RegisterDivFlex= styled.div`
    display: flex;
    gap: 40px;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`

