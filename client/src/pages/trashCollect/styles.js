import { styled } from "styled-components";
import {theme} from "../../theme.js";

const {colors} = theme;

export const FilterArea = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    gap: 25px;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const LabelAndInputDiv = styled.div`
    display: flex;
    gap: 10px;
    max-width: 50%;
    align-items: center;

    label {
        font-size: 19px;
        color: ${colors.orange.secondary};
        font-weight: 400;
    }

    input {
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 7px;
        font-size: 15px;
        box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};
        color: ${colors.green.secondary};
    }

    input::placeholder {
        color: ${colors.orange.terciary};
    }

    @media(max-width: 768px) {
        max-width: 100%;
        flex-direction: column;
        align-items: flex-start;

        input {
            width: 70%;
        }
    }
`

export const GridArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
    gap: 20px;

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const WarningNotesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    font-size: 18px;
    color: ${colors.orange.secondary};

    h2 {
        font-size: 22px;
        font-weight: 500;
        color: ${colors.orange.primary};
    }
`;

export const AnchorDiv = styled.div`
    display: flex;
    gap: 5px;
    font-size: 18px;
    color: ${colors.orange.secondary};

    a {
        color: ${colors.green.primary};
        cursor: pointer;
        text-decoration: underline;
    }
`