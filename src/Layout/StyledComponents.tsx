import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 1em;
`;

export const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    
    @media (max-width: 1224px) {
        grid-template-columns: 1fr;
    }
`

export const NumberedStats = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    * {
        text-align: center;
    }

    @media (max-width: 940px) {
        * {
            width: 100%;
        }
    }
`