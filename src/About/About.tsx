import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    background-color: #f5f5f5;
`;
const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
`;
const Label = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: #f5f5f5;
`;
const Underline = styled.div`
    width: 50px;
    height: 4px;
    background-color: #b22222; 
`;
const AboutText = styled.div`
    width: 50%;
    text-align: left;
    font-size: 24px;
    color: #666;
    line-height: 1.6;
    padding:0 50px;
`;
const Image = styled.img`
    width: 50%;
    display: block;
    padding:0 50px;
`;
const TextandImage = styled.div`
    display:flex;
    flex-direction: row;
    margin: 40px 0;
`;

const AboutUs: React.FC = () => {
    return(
        <AboutUsContainer>
            <Title>
                About Us
            </Title>
            <Label>
                <Underline />
            </Label>
            <TextandImage>
                <AboutText>
                    Muses customers include a large variety of local contractors, builders, developers, and cabinet dealers all over the United States. 
                    With warehouses on the east coast and the west coast, we are able to meet all of our customers' needs.<br/><br/>
                    In short, we are firmly established and involved with the growth and continued success of all of our customers.
                </AboutText>
                    <Image src='/Picture/AboutUs_Label.webp' alt="AboutUs"/>
            </TextandImage>
        </AboutUsContainer>
    );
}

export default AboutUs;