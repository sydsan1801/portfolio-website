import React from 'react'
import styled from 'styled-components';
import { Info } from '../../data/data';
import Typewriter from "typewriter-effect"
import { Tilt } from 'react-tilt';
import {motion} from "framer-motion";
import {headContainerAnimation,  headContentAnimation,  headTextAnimation } from "../../utils/motion";
const HeroContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    padding:80px 30px;
     z-index:1;
    @media (max-width:960px){
        padding:66px 16px;
    }
    @media (max-width:640px){
        padding:36px 16px;
    }

`;
const HeroInnerContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
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
const Title =styled.div`
    line-height:68px;
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

const Span=styled.div`
    color:${({theme})=>theme.primary};
    cursor:pointer;
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

const Img=styled.img`
    width:100%;
    height:100%;
    max-width:400px;
    max-height:400px;
    border-radius:10%;
    border: 2px solid ${({theme})=>theme.primary};

    @media (max-width:640px){
        max-width:280px;
        height:280px;
    }
`;
const Subtitle=styled.div`
    line-height:32px;
    align-items:center;
    justify-content:center;
    font-weight:500;
    font-size:20px;
    margin-bottom:42px;
    @media (max-width:960px){
        font-size:16px;
        line-height:32px;
        margin-bottom:16px;
        text-align:center;
    }
`;

// const ResumeButton=styled.a`
//     border:1px solid ${({theme})=>theme.primary};
//     color:${({theme})=>theme.primary};
//     padding:16px 0px;
//     width:95%;
//     max-width:300px;
//     text-align:center;
//     font-weight:600;
//     border-radius:50px;
//     -webkit-appearance:button;
//     -moz-appearance:button;
//     appearance:button;
//     text-decoration:none;
//     box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
//     &:hover{
//         background-color:${({theme})=>theme.primary};
//         color:${({theme})=>theme.text_primary};
//         transition:all 0.6s ease-in-out;
//         box-shadow:  20px 20px 60px #1F2634,
//     }

//     @media (max-width:640px){
//         padding:12px 0px;
//         font-size:18px;
//     }
// `;


const Hero1 = () => {
  return (
    <HeroContainer>

        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
            <HeroLeftContainer>
                <motion.div {...headTextAnimation}>
                <Title>
                    Hi, I am <br/> {Info.name}
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
                <Subtitle>{Info.description}</Subtitle>
                </motion.div>

                {/* <ResumeButton>
                    Check Resume
                </ResumeButton> */}
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


   
  )
}

export default Hero1
