import React from 'react'
import styled from 'styled-components';
import { Info } from '../../data/data';
import { Email, FacebookRounded, GitHub, LinkedIn, Phone, Twitter } from '@mui/icons-material';
import {Tilt} from "react-tilt";

const FooterContainer=styled.div`
    width:100%;
    padding:2rem 0;
    display:flex;
    justify-content:center;
    z-index:10;

`;
const FooterWrapper=styled.div`
    width:100%;
    max-width:1200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:14px;
    padding:1rem;
    color:${({theme})=>theme.text_primary};
    
`;
const Logo=styled.div`
    font-weight:600;
    font-size:20px;
    color:${({theme})=>theme.primary};
    @media (max-width:768px){
        justify-content:center;
        align-items:center;
        text-align:center;
        font-size:18px;
    }
    
`;

const SocialMediaIcons=styled.div`
    display:flex;
    margin-top:1rem;
`;
const SocialMediaIcon=styled.a`
    display:inline-block;
    margin:0 1rem;
    font-size:1.5rem;
    // color:${({theme})=>theme.primary +99};
    color:${({theme})=>theme.text_primary +60};
    transition:color 0.2s ease-in-out;
    &:hover{
        color:${({theme})=>theme.primary};
    }
`;

const BoxContainer=styled.div`
    align-items: flex-start;
    gap:1.5rem;
    flex-wrap: wrap;
    margin-top:40px;

`;
const Boxes=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:30px 20px;
    align-items: flex-start;
    gap:5rem;
    flex-wrap: wrap;
`;
const Box=styled.div`
    gap:5px;
    width:330px;
    height:250px;
     padding:1rem 3rem;
    background-color:${({theme})=>theme.card};
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    border-radius:30px;
    box-shadow:0 0 12px 14px rgba(0,0,0.4);
    transition:all 0.5s ease-in-out;
    &:hover{
        transform:translateY(-10px);
        box-shadow:0 0 50px 4px rgba(0,0,0.6);
        filter:brightness(1.1);
    }
`;
const FooterLine=styled.p`
    display:flex;
    text-align:center;
    font-size:18px;
    font-weight:600;
    justify-content:center;
    align-items:center;
    @media (max-width:768px){
        width:100%;
        display:flex;
         text-align:center;
         justify-content:center;
         align-items:center;
         font-size:13px;

    }

    `;

const FooterLineContainer=styled.div`
    margin-top:40px;
    // background-color:${({theme})=>theme.card};
    border-top:3px solid ${({theme})=>theme.text_primary+30};
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:5px;
    padding: 2.5rem 2rem;
    bottom:0;right:0;left:0;
       z-index:1000;

`;
const ImageContainer=styled.img`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:20px;
    max-width:900px;
    max-height:900px;
    
    border-radius:20px;
    @media (max-width:768px){
    justify-content:center;
    align-items:center;
    text-align:center;
    }

`;
const Title=styled.div`
    font-size:52px;
    font-weight:600;
    text-align:center;
    margin-top:20px;
    color:${({theme})=>theme.text_primary};
    @media (max-width:768px){
        margin-top:12px;
        font-size:52px;
    }

`;
const Footer = () => {
  return (
    
    <FooterContainer>
        <FooterWrapper>
            
            <Title>Get in touch</Title>

            <Tilt>
                <ImageContainer src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrrc64Qx6UNBYw0Si6Hzupjplgd-uCsbbSA&s'>

                </ImageContainer>
            </Tilt>
            

            <BoxContainer>
                <Boxes>

                    <Box>
                        <SocialMediaIcon>
                            <Email/>
                        </SocialMediaIcon>
                        
                        <h3>Email address</h3>
                        <a href="mailto:sydsan1801@gmail.com" target="display">sydsan1801@gmail.com</a>
                        
                    </Box>

                    <Box>
                        <SocialMediaIcon>
                            <GitHub/>
                        </SocialMediaIcon>
                        
                        <h3>Github</h3>
                        <a href="https://github.com/sydsan1801" target="display">sydsan1801</a>
                        
                    </Box>
                </Boxes>
            </BoxContainer>

            
            <SocialMediaIcons>
    
            </SocialMediaIcons>

                

            <FooterLineContainer>
            <Logo>Saniya Sayyed</Logo>
            <FooterLine>
                &copy; copyright 2024 Saniya Sayyed  all rights reserverd!
            </FooterLine>
             </FooterLineContainer>
        </FooterWrapper>
        
    </FooterContainer>

    
  )
}

export default Footer