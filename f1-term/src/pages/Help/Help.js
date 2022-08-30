import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, HelpCharBox, HelpCharText, InfoCard, Text, TextContainer, Title } from "./styles";

export const Help = () => {



    return (
        <Container>
            <InfoCard>
                <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png" alt="seta" width={20} height={20} style={{position:"absolute"}}/></Link>
                <Title>COMO JOGAR</Title>
                <TextContainer>
                    <Text>Todos os dias, uma nova palavra aparecerá no Letreco para você adivinhar.</Text>
                    <Text>Você terá 6 tentativas. Cada uma delas deve ser uma palavra que exista.</Text>
                    <Text>Acentos e cedilha são ignorados, tanto nas tentativas, quanto na resposta.</Text>
                    <Text>Após chutar, as letras mudarão para indicar o quão perto você está da resposta.</Text>
                </TextContainer>
                <div>
                    <Text>Se uma letra ficar verde, ela está presente na palavra e na posição correta.</Text>
                    <HelpCharBox>
                        <Box>
                            <HelpCharText>C</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>E</HelpCharText>
                        </Box>
                        <Box style={{ backgroundColor: 'green' }}>
                            <HelpCharText>R</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>T</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>O</HelpCharText>
                        </Box>
                    </HelpCharBox>

                    <Text>Se uma letra ficar amarela, ela está presente na palavra, mas na posição errada.</Text>
                    <HelpCharBox>
                        <Box>
                            <HelpCharText>Q</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>U</HelpCharText>
                        </Box>
                        <Box style={{ backgroundColor: 'yellow' }}>
                            <HelpCharText>A</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>S</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>E</HelpCharText>
                        </Box>
                    </HelpCharBox>

                    <Text>Se uma letra ficar vermelha, ela NÃO está na palavra.</Text>
                    <HelpCharBox>
                        <Box>
                            <HelpCharText>F</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>A</HelpCharText>
                        </Box>
                        <Box style={{ backgroundColor: 'red' }}>
                            <HelpCharText>L</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>H</HelpCharText>
                        </Box>
                        <Box>
                            <HelpCharText>A</HelpCharText>
                        </Box>
                    </HelpCharBox>

                </div>
            </InfoCard>

        </Container>
    )
}