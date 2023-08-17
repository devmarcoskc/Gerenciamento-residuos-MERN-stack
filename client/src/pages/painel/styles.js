import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
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
