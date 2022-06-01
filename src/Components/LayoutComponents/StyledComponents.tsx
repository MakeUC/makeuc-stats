import styled from 'styled-components';

export const Container = styled.div`
    background-color: #126F52;
    color: #f1f1f1;
    padding: 1em;
    border: 2px solid #034732;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const LinkButton = styled.a`
    background-color: #126F52;
    border: 2px solid #034732;
    border-radius: 7px;
    color: #f1f1f1;
    font-weight: 500;
    padding: 0.25em 0.75em;

    transition: all 0.2s ease-in-out;

    :hover {
        background-color: #8B728E;
        border-color: #694873;
        color: #f1f1f1;
        text-decoration: none;
    }
`;

export const Button = styled.button`
    background-color: #126F52;
    border: 2px solid #034732;
    border-radius: 7px;
    color: #f1f1f1;
    font-weight: 500;
    padding: 0.25em 0.75em;

    transition: all 0.2s ease-in-out;

    :hover {
        background-color: #8B728E;
        border-color: #694873;
    }
`