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
    background-color: ${colors.grey.backgroundColor};
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
        bottom: 3%;
        right: 3.5%;
        height: 24px;
        width: 24px;
        color: white;
    }

    @media(max-width: 768px) {
        width: 280px;
    }

    @media(max-width: 376px) {
        width: 260px;
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

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        gap: 0px;
    }

    @media(max-width: 376px) {
        h3 {
            font-size: 16px;
        }
        span {
            font-size: 16px;
        }
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

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 0px;
        margin-top: 10px;
        border-bottom: 1px solid ${colors.orange.primary};
    }
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

    @media(max-width: 768px) {
        gap: 2px;

        span {
            font-size: 13px;
        }
    }
`