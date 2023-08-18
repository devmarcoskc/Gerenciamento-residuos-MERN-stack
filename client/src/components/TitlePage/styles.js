import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const TitleAndTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;

    @media(max-width: 768px) {
        line-height: 1;
    }
`;

export const H1 = styled.h1`
    font-size: 26px;
    color: ${colors.green.primary};
    font-weight: bold;
`;

export const H2 = styled.h2`
    font-size: 21px;
    color: ${colors.orange.secondary};
`;

export const P = styled.p`
    font-size: 17px;
    color: ${colors.orange.secondary};
`