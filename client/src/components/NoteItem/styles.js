import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const NoteItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 250px;
    background-color: ${colors.green.designBackground};
    padding: 20px;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 3px ${colors.orange.secondary};

    &:before {
        content: '';
        position: absolute;
        bottom: 0%;
        right: 0%;
        width: 60px;
        height: 55px;
        border-top-left-radius: 100%;
        background-color: ${colors.orange.secondary};
        transform: skewY(180deg);
        transition: 0.5s;
    }

    svg {
        position: absolute;
        right: 4%;
        bottom: 4%;
        height: 22px;
        width: 22px;
        color: white;
    }

    a {
        position: absolute;
        bottom: 5%;
        padding-left: 20px;

        svg {
            color: ${colors.orange.secondary};
        }
    }
`;

export const TitleNote = styled.h2`
    font-size: 15px;
    color: ${colors.orange.primary};
    font-weight: 400;
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${colors.orange.terciary};
`;

export const IconDiv = styled.div`
    position: absolute;
    bottom: 5%;
    padding-left: 80px;

    svg {
        height: 23px;
        width: 23px;
        color: ${colors.orange.secondary};;
        cursor: pointer;
        padding-left: 20px;
    }
`