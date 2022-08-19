import React from "react";
import { DailyWord } from "../../Daily/Daily";
import { CharBox, CharText, Container } from "./styles";


export const WordAttempt = ({ c1, c2, c3, c4, c5 }) => {
    var letras = [];
    var palavra = c1 + c2 + c3 + c4 + c5
    const confereRepeticao = (char, posicao) => {

        for (let i = 0; i < 5; i++) {
            if (char === palavra.substr(i, 1) && char === DailyWord.substr(i, 1)) {
                return true;
            }
        }

        if (letras.includes(char)) {
            return true;
        }
        letras = letras + char;


        return false;
    }


    const confere = (char, charIndex) => {





        if (char === DailyWord.substr(charIndex, 1)) {
            return (
                <CharBox style={{ backgroundColor: 'green' }}>
                    <CharText>{char}</CharText>
                </CharBox>
            )
        } else if (DailyWord.includes(char)) {
            if (confereRepeticao(char, charIndex)) {
                return (
                    <CharBox>
                        <CharText>{char}</CharText>
                    </CharBox>
                )
            } else {
                return (
                    <CharBox style={{ backgroundColor: 'yellow', color: 'black' }}>
                        <CharText>{char}</CharText>
                    </CharBox>
                )
            }

        } else {
            return (
                <CharBox>
                    {char}
                </CharBox>
            )
        }
    }

    return (
        <Container>
            {confere(c1, 0)}
            {confere(c2, 1)}
            {confere(c3, 2)}
            {confere(c4, 3)}
            {confere(c5, 4)}
        </Container>
    )

};