import React, { useState, useRef } from 'react';
import { WordAttempt } from '../../components/WordAttempt/WordAttempt';
import { DailyWord } from '../../Daily/Daily';
import { CharInput, Container, ContainerAttempts, ContainerInput, ContainerResult, ResultText, SubmitButton } from './styles';

export const Home = () => {


    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();


    const [c1, setC1] = useState("");
    const [c2, setC2] = useState("");
    const [c3, setC3] = useState("");
    const [c4, setC4] = useState("");
    const [c5, setC5] = useState("");
    const [attempt, setAttempt] = useState(0);
    const [acertou, setAcertou] = useState(false);
    const [unallowed, setUnallowed] = useState(false);

    const [palavrasDigitadas, setPalavrasDigitadas] = useState([]);


    const focusInput = (inputElement) => {
        inputElement.current.focus();
    };

    const adicionaPalavra = (palavra) => {
        setPalavrasDigitadas([...palavrasDigitadas, palavra]);
    };

    const apagar = (event) => {
        var x = event.keyCode;
        if (x === 8) {
            
            return console.log("apagou");
            
        } 
        console.log("escreveu");
    }

    const decidir = (event) => {
        apagar(event) ? 
        focusInput(input1)
        :
        focusInput(input2)
    }



    return (
        <Container>

            <ContainerAttempts>
                {palavrasDigitadas.map((palavra) => (
                    <WordAttempt
                        c1={palavra.substr(0, 1)} c2={palavra.substr(1, 1)} c3={palavra.substr(2, 1)} c4={palavra.substr(3, 1)} c5={palavra.substr(4, 1)}
                    />
                ))}

            </ContainerAttempts>

            {attempt < 6 && !acertou ?

                <ContainerInput>
                    <div>
                        <p>Tentativa {attempt} de 6</p>
                    </div>
                    <div>
                        <CharInput
                            ref={input1}
                            type="text" maxLength={1} value={c1} required
                            onChange={((e) => [setC1(e.target.value.replace(/[^a-z]/gi, '').toUpperCase()), setUnallowed(false), focusInput(input2)])}
                        />
                        <CharInput
                            ref={input2}
                            type="text" maxLength={1} value={c2} required
                            onChange={((e) => [setC2(e.target.value.replace(/[^a-z]/gi, '').toUpperCase()), setUnallowed(false), focusInput(input3)])}
                        />
                        <CharInput
                            ref={input3}
                            type="text" maxLength={1} value={c3} required
                            onChange={((e) => [setC3(e.target.value.replace(/[^a-z]/gi, '').toUpperCase()), setUnallowed(false), focusInput(input4)])}
                        />
                        <CharInput
                            ref={input4}
                            type="text" maxLength={1} value={c4} required
                            onChange={((e) => [setC4(e.target.value.replace(/[^a-z]/gi, '').toUpperCase()), setUnallowed(false), apagar ? focusInput(input3) : focusInput(input5)])}
                        />
                        <CharInput
                            ref={input5}
                            type="text" maxLength={1} value={c5} required
                            onChange={((e) => [setC5(e.target.value.replace(/[^a-z]/gi, '').toUpperCase()), setUnallowed(false), decidir])}
                        />
                    </div>


                    {unallowed ?
                        <div>Incompleto</div>
                        :
                        <></>

                    }
                    <SubmitButton
                        onClick={(() => {
                            if (c1 !== "" && c2 !== "" && c3 !== "" && c4 !== "" && c5 !== "") {
                                let palavra = c1 + c2 + c3 + c4 + c5
                                adicionaPalavra(palavra)
                                if (palavra === DailyWord) { setAcertou(true) }

                                setAttempt(attempt + 1)
                                setUnallowed(false)
                                setC1("");
                                setC2("");
                                setC3("");
                                setC4("");
                                setC5("");
                            } else {
                                setUnallowed(true)
                            }
                        })}
                    >
                        <img src={'https://cdn-icons-png.flaticon.com/512/876/876777.png'} alt={"resposta"} width={25} height={25} />
                    </SubmitButton>

                </ContainerInput>
                :
                acertou ?
                    <ContainerResult>
                        <img src='https://cdn-icons-png.flaticon.com/512/190/190411.png' alt={"acertou"} width={40} height={40} />

                        {attempt === 1 ?
                            <ResultText>Parabéns!! Você acertou em {attempt} tentativa!</ResultText>
                            :
                            <ResultText>Parabéns!! Você acertou em {attempt} tentativas!</ResultText>
                        }
                    </ContainerResult>

                    :

                    <ContainerResult>
                        <img src='https://cdn-icons-png.flaticon.com/512/7887/7887076.png' alt={"errou"} width={40} height={40} />
                        <ResultText>

                            Você usou todas as suas {attempt} tentativas!! </ResultText>
                    </ContainerResult>



            }
        </Container>
    );
};