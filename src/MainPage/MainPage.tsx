import React from 'react';
import styled from 'styled-components';

const MainPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
    height: 85vh;
    background-image: url("https://www.musescabinets.com/wp-content/uploads/2022/01/1.webp");
    background-size: cover;
    background-position: center;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); 
    }
`;
const MainContent = styled.div`
    position: relative;
    text-align: center;
    z-index: 1;
`;
const Title = styled.h1`
    font-size: 8em;
    margin: 0;
    font-weight: bold;
`;
const Subtitle = styled.p`
    position: block;
    font-size: 2em;
    margin: 0 0;
    flex-wrap: wrap;
`;
const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    margin:30px 0px;
    border: 2px solid #fff;
    color: #fff;
    text-decoration: none;
    font-size: 36px;

    &:hover {
        background: #b22222;
        color: #fff;
        border: 2px solid #b22222;
    }
`;
const Page: React.FC = () => {
    return (
        <MainPage>
            <MainContent>
                <Title>Muses Cabinets</Title>
                <Subtitle>Specialized in Kitchen Cabinets and</Subtitle>
                <Subtitle>Bathroom Vanities</Subtitle>
                <Button href=" ">View Our Cabinets</Button>
            </MainContent>
        </MainPage>
    );
};

export default Page;
