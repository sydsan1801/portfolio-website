import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/data';
import ProjectCard from '../cards/ProjectCard';

const Container=styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    justify-content:center;
    align-items:center;
    margin-top:50px;-
    padding:0 16px;
    z-index:1;
    `;
const Wrapper=styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    @media (max-width:960){
        flex-direction:column;
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

const Desc=styled.div`
    width:85%;
    font-size:18px;
    text-align:center;
    justify-content:center;
    align-items:center;
    font-weight:600;
    color:${({theme})=>theme.text_secondary};
    @media (max-width:768px){
        font-size:16px;
        text-align:center;
    }
`;
const ToggleButtonGroup=styled.div`
    display:flex;
    border:1.5px solid ${({theme})=>theme.primary};
    color:${({theme})=>theme.primary};
    font-size:16px;
    border-radius:12px;
    font-weight:500;
    margin:22px 0;
    @media (max-width:768px){
        font-size:12px;
    }
`;
const ToggleButton=styled.div`
    padding:8px 18px;
    border-radius:6px;
    cursor:pointer;
    &:hover{
        background:${({theme})=>theme.primary + 20};
    }
    @media (max-width:768px){
        padding:6px 8px;
        border-radius:4px;
    }
    ${({active,theme})=>active && `
        background:${({theme})=>theme.primary + 20};
    `}
`;

const Divider=styled.div`
    width:1.5px;
    background:${({theme})=>theme.primary};
`;

const CardContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:28px;
    flex-wrap:wrap;
`;
const Projects = () => {
    const [toggle,setToggle]=useState("all")
  return (
    <Container id="Projects">
        <Wrapper>
            <Title>
                Projects
            </Title>

            <Desc  style={{
                marginBottom:"40px",
            }}>Demonstrated expertise and innovation through a curated selection of impactful initiatives, showcasing hands on expertise and proficiency in various technologies.
            Each project represents a unique problem solving journey.
            </Desc>

            <ToggleButtonGroup>

                <ToggleButton active={toggle==="all"} onClick={()=>setToggle("all")}>All</ToggleButton>

                <Divider/>

                <ToggleButton active={toggle==="web app"} onClick={()=>setToggle("web app")}>Web App</ToggleButton>

                <Divider/>
                <ToggleButton active={toggle==="Machine Learning"} onClick={()=>setToggle("Machine Learning")}>
                    Machine Learning
                </ToggleButton>
            </ToggleButtonGroup>

            <CardContainer>
                {toggle==="all" && projects.map((project)=><ProjectCard project={project}
                />
                )}

                {projects.filter((item)=>item.category===toggle).map((project)=><ProjectCard project={project}/>)}
            </CardContainer>

            
        </Wrapper>
    </Container>
  )
}

export default Projects
