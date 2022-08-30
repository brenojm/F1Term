import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    flex-direction: row;
    gap: 0.6rem;
    font-family: 'Concert One', cursive;
    font-size: 2rem;
`;

export const CharBox = styled.div`
    margin: 0.5rem 0;
    padding:0.7rem;
    align-items: center;
    text-align: center;
    width: 3rem;
    height: 3rem;
    border-radius:5px;
    background-color: grey;
`;

export const CharText = styled.p`
    padding: 0;
    margin: 0;
    color:#fff; 
    text-shadow:#696969 1px -1px, #696969 -1px 1px, #696969 1px 1px, #696969 -1px -1px
`;