import styled from "styled-components";

export const Container = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    align-items: center;
    text-align: center;
    padding-top: 2rem;
    display: flex;
    flex-direction:column;
    gap: 1rem;
`;  

export const ContainerAttempts = styled.div`
    height: 33.5rem;
    width: 20rem;
    border: 1px solid black;
    padding: 10px;
    border-radius:5px;
    background-color: #454545;

`;

export const ContainerInput = styled.div`
    width: 20rem; 
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius:5px;
    background-color: #454545;
`;

export const ContainerResult = styled.div`
    margin: 1rem 0;
    width: 80%;
    height: 20%;
    background-color: #454545;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid black;

`;

export const CharInput = styled.input`
    width: 3rem;
    height: 3rem;
    border-radius:5px;
    font-size:2rem;
    margin: 0 0.2rem;
    text-align: center;
    background-color: gray;
    color: white;
    text-transform:uppercase;
    font-family: 'Concert One', cursive;
`;

export const SubmitButton = styled.button`  
    margin-top:1rem;
    padding: 4px 10px;
    border-radius:10px;
    font-size:2rem;
    background-color: lightblue;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    :hover{
        box-shadow:   4px 4px 15px 0px #000000,inset 5px 5px 15px 5px rgba(0,0,0,0);
    }
`;

export const ResultText = styled.p`
    font-family: 'Concert One', cursive;
    color: white;
    font-size: 2rem;
    margin: 0;
`;