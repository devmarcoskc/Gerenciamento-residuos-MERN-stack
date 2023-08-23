import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    margin-top: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};
`;

export const H2 = styled.h2`
    font-size: 24px;
    color: ${colors.orange.primary};
`;

export const Container = styled.div`
    display: flex;
    gap: 50px;

    @media(max-width: 1024px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const LabelAndInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        font-size: 18px;
        color: ${colors.orange.secondary};
        margin-top: 15px;
    }

    input {
        border: none;
        outline: 0;
        padding: 5px 0px;
        font-size: 16px;
        border-bottom: 1px solid ${colors.orange.primary};
        color: ${colors.green.primary};
        width: 365px;
    }

    input::placeholder {
        color: ${colors.orange.quaternary};
        font-size: 15px;
    }

    select {
        padding: 4px;
        border: 1px solid ${colors.orange.primary};
        color: ${colors.green.terciary};
        font-size: 15px;
        outline: 0;
    }

    @media(max-width: 768px) {
        input {
            width: 100%;
        }
    }
`;

export const shortWidthInput = styled.input`
    border: none;
    outline: 0;
    padding: 5px 0px;
    font-size: 16px;
    border-bottom: 1px solid ${colors.orange.primary};
    color: ${colors.green.primary};
    width: 140px !important;

    &::placeholder {
        color: ${colors.orange.quaternary};
        font-size: 15px;
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const H4 = styled.h4`
    font-size: 19px;
    font-weight: 500;
    color: ${colors.orange.primary};
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        padding: 7px;
        border: none;
        outline: 0;
        border-radius: 5px;
        background-color: ${colors.orange.quaternary};
        color: white;
        transition: all ease 7s;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            background-color: ${colors.orange.primary};
        }
    }

    span {
        font-size: 13px;
        color: ${colors.orange.terciary};
    }
`;

export const CategoryArea = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;

    span {
        font-size: 16px;
        color: ${colors.orange.terciary};
    }

    label {
        font-size: 16px;
        color: ${colors.orange.terciary};
    }

    button {
        padding: 5px;
        text-decoration: underline;
        color: ${colors.green.primary};
        outline: 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const OptionsDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
    margin-top: -10px;
    font-size: 15px;
    color: ${colors.orange.terciary};
    
    span {
        color: ${colors.green.primary};
        text-decoration: underline;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        margin-top: 10px;
        margin-bottom: 5px;
    }
`

export const FlexDivRow = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;

    label {
        font-size: 16px;
    }

    span {
        font-size: 15px;
        color: ${colors.orange.terciary};
    }
    button {
        padding: 5px;
        background-color: ${colors.green.primary};
        outline: 0;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const NumberInput = styled.input`
    border: none;
    outline: 0;
    padding: 5px 0px;
    font-size: 16px;
    border-bottom: 1px solid ${colors.orange.primary};
    color: ${colors.green.primary};
    width: 70px !important;

    &::placeholder {
        color: ${colors.orange.quaternary};
        font-size: 15px;
    }

    @media(max-width: 768px) {
        width: 100px !important;
    }
`;

export const SpanError = styled.span`
    font-size: 12px;
    color: red;
    font-weight: bold;
`;

export const SpanObersvation = styled.span`
    font-size: 14px;
    color: ${colors.orange.primary};
    margin-top: 15px;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    gap: 30px;
    margin: 20px 0px;
`

export const Button = styled.button`
    padding: 10px;
    width: 150px;
    font-size: 18px;
    border: none;
    border-radius: 15px;
    background-color: ${colors.orange.primary};
    color: white;
    outline: 0;
    opacity: 0.85;
    transition: all ease .7s;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    @media(max-width: 768px) {
        width: 120px;
        font-size: 16px;
    }
`

