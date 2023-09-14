import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const MainInfosArea = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;

    @media(max-width: 1024px) {
        flex-direction: column;
        gap: 5px;
    }
`;

export const GeneralStatsArea = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    h1 {
        font-size: 20px;
        color: ${colors.orange.primary};
        font-weight: 500;
        line-height: 0;
    }

    span {
        font-size: 20px;
        text-align: center;
        color: ${colors.green.primary};
        font-weight: 500;
        line-height: 0.5;
    }

    @media(max-width: 320px) {
        h1 {
            font-size: 17px;
            line-height: 0.4;
        }

        span {
            font-size: 17px;
        }
    }
`;

export const NameAddress = styled.h1`
    font-size: 25px;
    line-height: 0;
    color: ${colors.orange.primary};
`;

export const FiltersArea = styled.div`
    display: flex;
    flex: 1;
    gap: 15px;

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const Label = styled.label`
    font-size: 17px;
    color: ${colors.orange.secondary};
    font-weight: 500;
`;

export const FilterByAdressArea = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    @media(max-width: 320px) {
        h2 {
            font-size: 17px;
        }
    }
`;

export const InputAndSearchButtonArea = styled.div`
    display: flex;
    align-items: center;
    width: 120px;
    font-size: 15px;
    height: 30px;

    input {
        outline: none;
        height: 30px;
        width: 100%;
        font-size: 15px;
        color: ${colors.green.secondary};
        border: 1px solid ${colors.orange.terciary};
        border-radius: 5px;
        padding-left: 8px;
    }

    input::placeholder {
        color: ${colors.orange.terciary};
    }

    @media(max-width: 768px) {
        width: 250px;
    }
`;

export const Select = styled.select`
    height: 35px;
    border: 1px solid ${colors.orange.terciary};
    border-radius: 5px;
    color: ${colors.orange.terciary};
    padding: 5px;
    outline: 0;
`

export const FilterByDateArea = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    input {
        outline: none;
        height: 30px;
        width: 50px;
        font-size: 15px;
        color: ${colors.green.secondary};
        border: 1px solid ${colors.orange.terciary};
        border-radius: 5px;
        padding-left: 8px;
    }

    input::placeholder {
        color: ${colors.orange.terciary};
    }

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 5px;
        align-items: flex-start;
    }
`;

export const FilterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 90px;
    font-size: 16px;
    background-color: ${colors.orange.terciary};
    opacity: 0.9;
    color: white;
    outline: 0;
    border: none;
    border-radius: 5px;
    transition: all ease .7s;
    cursor: pointer;

    svg {
        height: 18px;
        width: 18px;
        margin-left: 5px;
    }

    &:hover {
        opacity: 1;
    }
`

export const GoBackButton = styled.button`
    padding: 13px;
    font-size: 16px;
    color: white;
    background-color: ${colors.orange.terciary};
    border: none;
    outline: 0;
    border-radius: 15px;
    opacity: 0.9;
    transition: all ease .7s;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
` 

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    @media(max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NivoGraphDiv = styled.div`
    max-height: 60vh;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const h1 = styled.h1`
    font-size: 25px;
    color: ${colors.orange.primary};
`
export const h4 = styled.h4`
    margin-top: 20px;
    font-size: 25px;
    color: ${colors.orange.primary};
`;

export const ManualDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    max-width: 60%;
    
    h1 {
        font-size: 20px;
        color: ${colors.green.primary};
        line-height: 0;
        font-weight: 500;
    }

    p {
        margin-top: 5px;
        font-size: 17px;
        color: ${colors.orange.secondary};
        text-align: justify;
    }
`

export const WelcomeDiv = styled.div`
    display: flex;
    gap: 50px;
    max-width: 60%;
    align-items: center;
`;

export const WelcomeItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    h1 {
        font-size: 16px;
        color: ${colors.green.primary};
        font-weight: 500;
    }

    a {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.orange.primary};
        font-size: 16px;
        color: white;
        text-decoration: none;
        transition: all ease .7s;
        opacity: 0.85;
        cursor: pointer;
        border-radius: 15px;

        &:hover {
            opacity: 1;
        }
    }
`
