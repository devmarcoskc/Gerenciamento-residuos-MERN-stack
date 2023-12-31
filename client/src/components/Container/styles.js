import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    @media(max-width: 768px) {
        
    }
`;

export const Section = styled.section`
    flex: 1;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: calc(100vh - 40px);

    @media(max-width: 768px) {
        z-index: 0;
    }
`