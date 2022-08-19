import React from "react";
import { DailyWord } from "../../Daily/Daily";
import { CharBox, Container } from "./styles";


export const WordAttempt = ({ c1, c2, c3, c4, c5 }) => {


    const confere = (char, charIndex) => {



        if (char === DailyWord.substr(charIndex, 1)) {
            return (
                <CharBox style={{ backgroundColor: 'green' }}>
                    {char}
                </CharBox>
            )
        } else if (DailyWord.includes(char)) {
            return (
                <CharBox style={{ backgroundColor: 'yellow', color: 'black' }}>
                    {char}
                </CharBox>
            )
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