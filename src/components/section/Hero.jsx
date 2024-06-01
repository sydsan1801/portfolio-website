import React from 'react'
import styled from 'styled-components';
import { Info } from '../../data/data';
import Typewriter from "typewriter-effect";
import HeroBgAnimation from '../HeroBgAnimation';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {headContainerAnimation,  headContentAnimation,  headTextAnimation } from "../../utils/motion";

const HeroContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    padding:80px 30px;
    z-index:1;

    @media (max-width:960px){
        padding:66px 16px;
    }
    @media (max-width:640px){
        padding:36px 16px;
    }

    clip-path:polygon(0 0, 100% 0, 100% 100%,70% 95%, 0 100%);


`;
const HeroInnerContainer=styled.div`
    display:flex;
    position:relative;
    justify-content:space-between;
    align-items:center;
    width:100%;
    max-width:1100px;
     @media (max-width:960px){
        flex-direction:column;
     }

`;
const HeroLeftContainer=styled.div`
    width:100%;
    order:1;
    @media (max-width:960px){
        order:2;
        margin-bottom:30px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:6px;
    } 
`;
const HeroRightContainer=styled.div`
    width:100%;
    order:2; 
    display:flex;
    justify-content:end;
     @media (max-width:960px){
        order:1;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        margin-bottom:80px;
    } 
    @media (max-width:640px){
        margin-bottom:30px;
    }
`;
const Title=styled.div`
    font-weight:700;
    font-size:50px;
    color:${({theme})=>theme.text_primary};
    line-height:68px;

    @media (max-width:960px){
        text-align:center;
    }
    @media (max-width:960px){
        font-size:40px;
        line-height:48px;
        margin-bottom:8px;
    }
`;

const TextLoop=styled.div`
    font-weight:600;
    font-size:32px;
    display:flex;
    gap:12px;
    color:${({theme})=>theme.text_primary};
    line-height:68px;

    @media (max-width:960px){
        text-align:center;
    }
    @media (max-width:960px){
        font-size:27px;
        line-height:48px;
        margin-bottom:16px;
    }
`;

const Span=styled.div`
    color:${({theme})=>theme.primary};
    cursor:pointer;
`;

const SubTitle=styled.div`
    font-weight:500;
    font-size:20px;
    line-height:32px;
    margin-bottom:42px
    color:${({theme})=>theme.text_primary + 95};
     @media (max-width:960px){
        text-align:center;
    }
    @media (max-width:960px){
        font-size:16px;
        line-height:32px;
        margin-bottom:16px;
    }
`;

const ResumeButton=styled.a`
    -webkit-appearance:button;
    -moz-appearance:button;
    appearance:button;
    text-decoration:none;
    
    width:95%;
    max-width:300px;
    text-align:center;
    padding:16px 0;
    border-radius:50px;
    font-weight:600;
     background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }  

    @media (max-width:640px){
        padding:12px 0;
        font-size:18px;
    }
    
    // border: 1px solid ${({theme})=>theme.primary};
    // color:${({theme})=>theme.text_primary};
    // cursor:pointer;
    // &:hover{
    //     background:${({theme})=>theme.primary};
    // }
    
`;

const Img=styled.img`
    border-radius:10%;
    width:100%;
    height:100%;
    max-width:400px;
    max-height:400px;
    border:2px solid ${({theme})=>theme.primary};

    @media (max-width: 640px){
        max-width:280px;
        max-height:280px;
    }
`;
const HeroBg=styled.div`
    position:absolute;
    display:flex;
    top:50%;
    right:0;
    bottom:0;
    left:50%;
    height:100%;
    max-width:1360px;
    justify-content:end;

    -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

    `;
const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
            <HeroBgAnimation/>
        </HeroBg>

        <motion.div {...headContainerAnimation}>
            <HeroInnerContainer>
            <HeroLeftContainer>
                <motion.div {...headTextAnimation}>
                <Title>
                    I am <br/> {Info.name}
                </Title>

                <TextLoop>
                    I am a 
                    <Span>
                        <Typewriter
                        options={{
                            strings:Info.roles,
                            autoStart:true,
                            loop:true,
                        }}
                        />
                    </Span>
                </TextLoop>
                </motion.div>
                
                <motion.div {...headContentAnimation}>
                <SubTitle>{Info.description}</SubTitle>
                </motion.div>
                <br/>
                <ResumeButton>Check Resume</ResumeButton>
            </HeroLeftContainer>

            <HeroRightContainer>
                <motion.div {...headContentAnimation}>
                <Tilt>
                <Img src='https://png.pngtree.com/background/20230525/original/pngtree-female-developer-working-at-a-table-at-night-picture-image_2734060.jpg'/>
                </Tilt>
                </motion.div>
            </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
        
      </HeroContainer>
    </div>
  )
}

export default Hero
