import React, { useState } from 'react';
import { WordAttempt } from '../../components/WordAttempt/WordAttempt';
import { DailyWord } from '../../Daily/Daily';
import { CharInput, Container, SubmitButton } from './styles';

export const Home = () => {

    const [c1, setC1] = useState("");
    const [c2, setC2] = useState("");
    const [c3, setC3] = useState("");
    const [c4, setC4] = useState("");
    const [c5, setC5] = useState("");
    const [attempt, setAttempt] = useState(0);
    const [acertou, setAcertou] = useState(false);

    const [palavrasDigitadas, setPalavrasDigitadas] = useState([]);



    const adicionaPalavra = (palavra) => {
        setPalavrasDigitadas([...palavrasDigitadas, palavra]);
    }


    return (
        <Container>
            <div>
                {palavrasDigitadas.map((palavra) => (
                    <WordAttempt
                        c1={palavra.substr(0, 1)} c2={palavra.substr(1, 1)} c3={palavra.substr(2, 1)} c4={palavra.substr(3, 1)} c5={palavra.substr(4, 1)}
                    />
                ))}

            </div>
            {attempt < 5 && !acertou ?

                <div>
                    <div>
                        <CharInput
                            type="text" maxLength={1} required
                            onChange={((e) => setC1(e.target.value.toUpperCase()))}
                        />
                        <CharInput
                            type="text" maxLength={1} required
                            onChange={((e) => setC2(e.target.value.toUpperCase()))}
                        />
                        <CharInput
                            type="text" maxLength={1} required
                            onChange={((e) => setC3(e.target.value.toUpperCase()))}
                        />
                        <CharInput
                            type="text" maxLength={1} required
                            onChange={((e) => setC4(e.target.value.toUpperCase()))}
                        />
                        <CharInput
                            type="text" maxLength={1} required
                            onChange={((e) => setC5(e.target.value.toUpperCase()))}
                        />
                    </div>
                    <div>
                        <SubmitButton
                            onClick={(() => {
                                let palavra = c1 + c2 + c3 + c4 + c5
                                adicionaPalavra(palavra)
                                if(palavra === DailyWord){setAcertou(true)}
                                setAttempt(attempt+1)
                            })}
                        >
                            Enviar
                        </SubmitButton>
                    </div>
                </div>
            :

            <div>{attempt} tentativas</div>
            
            
            }

            



        

        </Container>
    );
};