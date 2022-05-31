import styled from "styled-components";

export const TotalRegistrantText = styled.h2`
    margin: 0;
`

export const StatText = styled.h4`
    margin: 0;
`

export const GraphTitle = styled.h3`
    marign: 0;
`

export const GraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

export const DownloadButton = styled.button`
    background-color: #126F52;
    border: 2px solid #034732;
    border-radius: 7px;
    color: #f1f1f1;
    font-size: 24px;
    font-weight: 500;
    margin-top: 1em;
    padding: 0.25em 0.75em;

    transition: all 0.2s ease-in-out;

    :hover {
        background-color: #8B728E;
        border-color: #694873;
    }
`

export const SponsorSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`;

export const SponsorGroupContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 1em;

    & + & {
        border-top: 2px solid #034732;
    }

    > * {
        background-color: #fff;
    }

    > * + * {
        margin: 1em;
    }
`