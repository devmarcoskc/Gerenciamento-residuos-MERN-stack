import { styled } from "styled-components";
import { theme } from "../../theme";

const {colors} = theme;

export const NavBar = styled.nav`
    width: 20%;
    height: 100vh;
    background-color: ${colors.grey.backgroundColor};

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: 0;
        z-index: 100;
        width: 50%;
        background-color: whitesmoke;
        transition: all ease .7s;
    }
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: 0;
        z-index: 100;
        width: 70%;
        background-color: whitesmoke;
        transition: all ease .7s;
    }
`;

export const MobileSVGClose = styled.div`
    svg {
        margin-top: 30px;
        height: 30px;
        width: 30px;
        color: ${colors.orange.primary};
    }
`;

export const MobileSVGMenu = styled.div`
    svg {
        z-index: 20;
        position: fixed;
        top: 0%;
        right: 5%;
        margin-top: 30px;
        height: 40px;
        width: 40px;
        color: ${colors.orange.primary};
    }
`;

export const Img = styled.img`
    transform: scale(0.8);
    margin-top: 20px;

    @media(max-width: 768px) {
        transform: scale(0.65);
        margin-top: 40px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
    margin-top: 20px;

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

    @media(max-width: 768px) {
        width: 85%;
        margin-top: 50px;

        a {
            font-size: 16px;
            width: 100%;
        }
    }
`;