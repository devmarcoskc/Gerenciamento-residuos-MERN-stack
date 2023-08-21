import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const InfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};
    max-width: 600px;
    margin-top: 20px;
    border-radius: 15px;
`;

export const InfoAndName = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    svg {
        height: 40px !important;
        widht: 40px !important;
        color: ${colors.orange.terciary};
    }

    h4 {
        font-size: 20px;
        color: ${colors.orange.terciary};
    }

    span {
        font-size: 18px;
        color: ${colors.green.primary};
        font-weight: bold;
    }

    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0px;
        margin-bottom: 20px;
        border-bottom: 1px solid ${colors.orange.terciary};
    }
`;

export const MobileDivider = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    height: 1px;
    width: 100%;
    color: ${colors.orange.terciary};
`

export const H2 = styled.h2`
    margin-top: 40px;
    font-size: 18px;
    font-weight: 400;
    color: ${colors.orange.terciary};
`