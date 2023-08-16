import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const Container = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    line-height: 0;
    margin-top: 10px;
    padding: 10px;
    width: 350px;
    box-shadow: 0px 0px 5px 3px ${colors.orange.primary};
    border-radius: 5px;

    h5 {
        color: ${colors.orange.secondary};
        font-size: 17px;
        font-weight: 600;
    }

    span {
        color: ${colors.green.primary};
        font-size: 17px;
        font-weight: 600;
    }
`