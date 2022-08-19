import styled from "styled-components";

export const Container = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    align-items: center;
    text-align: center;
    padding-top: 10px;
`;  

export const CharInput = styled.input`
    width: 2rem;
    height: 2rem;
    border-radius:5px;
    font-size:2rem;
    margin: 0 0.5rem;
    text-align: center;
    background-color: gray;
`;

export const SubmitButton = styled.button`  
    margin-top:1rem;
    padding: 4px 10px;
    border-radius:10px;
    font-size:2rem;
    background-color: lightblue;
    cursor: pointer;

    :hover{
        background-color: blue;
    }
`;