import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #282c34;
    padding-top: 2rem;
    justify-content: center;
`;

export const TextContainer = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const HelpCharBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

`;

export const InfoCard = styled.div`
    height: 33.5rem;
    width: 60rem;
    border: 1px solid black;
    padding: 16px;
    border-radius:5px;
    background-color: #454545;
`;

export const Title = styled.div`
    text-align: center;
    font-weight:bold;
    color: white;
`;

export const Text = styled.div`
    text-align: center;
    margin: 0;
    color: white;
`;

export const Box = styled.div`
    margin: 0.5rem 0;
    padding:0.7rem;
    align-items: center;
    text-align: center;
    width: 1rem;
    border-radius:5px;
    background-color: grey;
`;

export const HelpCharText = styled.p`
    padding: 0;
    margin: 0;
    color:#fff; 
    text-shadow:#696969 1px -1px, #696969 -1px 1px, #696969 1px 1px, #696969 -1px -1px
`;