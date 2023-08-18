import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const NotesDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
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
