import { styled, useTheme } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 130px;
    box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};
    width: auto;
    border-radius: 15px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        bottom: 0%;
        right: 0%;
        width: 50px;
        height: 50px;
        border-top-left-radius: 100%;
        border-bottom-right-radius: 15px;
        background-color: ${colors.orange.secondary};
        transform: skewY(180deg);
        transition: 0.5s;
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0%;
        right: 0%;
        width: 50px;
        height: 50px;
        border-top-left-radius: 100%;
        border-bottom-right-radius: 15px;
        background-color: ${colors.orange.secondary};
        transform: skewY(180deg);
        transition: 0.5s;
    }

    svg {
        position: absolute;
        right: 5%;
        bottom: 10%;
        height: 18px;
        width: 18px;
        color: white;
    }

    @media(max-width: 768px) {
        height: 120px;
    }
`;

export const H1 = styled.h1`
    font-size: 17px;
    color: ${colors.orange.primary};
    font-weight: 500;
    margin-top: 20px;

    @media(max-width: 320px) {
        font-size: 15px;
    }
`;

export const Span = styled.span`
    text-align: center;
    color: ${colors.green.primary};
    font-weight: 500;
    line-height: 0.5;
    margin-bottom: 20px;
`;

export const SVGStats = styled.div`
    position: absolute;
    left: 15%;
    bottom: 10%;

    svg {
        height: 20px;
        width: 20px;
        color: ${colors.orange.secondary};
    }
`

