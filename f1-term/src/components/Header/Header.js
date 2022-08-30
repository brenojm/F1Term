import React from "react";
import { Link } from "react-router-dom";
import { Container, TitleText } from "./styles";


export const Header = () => {


    return (
        <Container>
            <div>
                <p>About</p>
            </div>
            <div>
                <Link style={{textDecoration:"unset", color:"black"}} to="/"><TitleText>F1 TERM</TitleText></Link>
            </div>
            <div>
                <Link to="/help"><img src="https://cdn-icons-png.flaticon.com/512/4238/4238836.png" alt="help" width={20} height={20} /></Link>
            </div>
        </Container>
    )
};