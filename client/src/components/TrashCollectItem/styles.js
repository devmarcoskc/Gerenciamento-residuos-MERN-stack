import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const ItemContainer = styled.div`
    display: flex;
    min-height: 450px;
    border-radius: 15px;
    width: auto;
    flex-direction: column;
    padding: 20px;
    background-color: ${colors.green.designBackground};
    box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};
    position: relative;

    &:before {
        content: '';
        position: absolute;
        bottom: 0%;
        right: 0%;
        width: 70px;
        height: 65px;
        border-top-left-radius: 100%;
        background-color: ${colors.orange.secondary};
        transform: skewY(180deg);
        transition: 0.5s;
        border-bottom-right-radius: 15px;
    }

    svg {
        position: absolute;
        bottom: 2.5%;
        right: 3.5%;
        height: 21px;
        width: 21px;
        color: white;
    }
`;

export const TitleAndText = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 40px;

    h3 {
        color: ${colors.orange.primary};
        font-size: 17px;
        font-weight: 500;
    }

    span {
        color: ${colors.green.primary};
        font-weight: bold;
    }
`;

export const h2 = styled.h2`
    font-size: 19px;
    color: ${colors.orange.primary};
`;

export const CollectItem = styled.div`
    display: flex;
    gap: 10px;
    line-height: 0.5;
`;

export const TitleAndTextItem = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    h3 {
        font-size: 15px;
        color: ${colors.orange.primary};
        font-weight: 500;
    }
    span {
        font-size: 14px;
        color: ${colors.green.primary};
        font-weight: bold;
    }
`