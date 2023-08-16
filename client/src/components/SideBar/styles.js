import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const NavBar = styled.nav`
    width: 20%;
    height: 100vh;
    background-color: ${colors.green.designBackground};
`;

export const Img = styled.img`
    transform: scale(0.8);
    margin-top: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 10px;
    padding: 20px;

    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        font-size: 17px;
        color: ${colors.orange.primary};
        text-decoration: none;
        transition: all ease .7s;

        svg {
            height: 25px;
            width: 25px;
        }

        &:hover {
            color: ${colors.green.secondary};
        }
    }
`;