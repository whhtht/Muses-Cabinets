import React from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
    display:flex;
    justify-content: start;
    align-items:center;
    background-color: #f5f5f5;
    margin:2px 0;
    padding: 60px;
    underline: away;
`;
const Text = styled.h2`
    font-size: 35px;
    color:#b22222;
    line-height: 50%;
    margin: 0;
    flex-grow: 4;
`;
const Button = styled.a`
    display: inline-block;
    background-color: #b22222;
    color: #fff;
    border: 2px solid #b22222;
    padding: 20px 100px;
    font-size: 16px;
    text-decoration: none;
    transition: background 0.3s, color 0.3s;

    &:hover {
        background: #fff;
        color: #000;
        border: 2px solid #000;
    }
`;


const SignUp: React.FC = () => {
    return(
        <SignUpContainer>
            <Text>
                Become a Dealer Today
            </Text>
            <Button href=" ">
                Sign Up
            </Button>
        </SignUpContainer>
    );
}

export default SignUp;