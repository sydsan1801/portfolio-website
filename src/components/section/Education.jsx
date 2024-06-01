import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import styled from 'styled-components'
import { education } from '../../data/data';
import EducationCard from '../cards/EducationCard';

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    z-index:1;
    align-items:center;
    margin-top:30px;
`;

const Wrapper=styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    width:100%;
    gap:12px;
    @media (max-width:960px){
        flex-direction:column;
    }
`;

const Title=styled.div`
    font-size:52px;
    text-align:center;
    font-weight:600;
    margin-top:20px;
    color:${({theme})=>theme.text_primary};
    @media (max-width:768px){
        margin-top:12px;
        font-size:52px;
    }
`;



const Education = () => {
  return (
    <Container id="Education">
        <Wrapper>
            <Title style={{
                marginBottom:"40px",
            }}>Education</Title>

            <VerticalTimeline>
                {education.map((education,index)=>(
                    <EducationCard education={education}/>
                ))}
            </VerticalTimeline>
        </Wrapper>

    </Container>
  )
}

export default Education