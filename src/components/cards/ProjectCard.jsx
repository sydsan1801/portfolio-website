import React from 'react'
import styled from 'styled-components'

const Card=styled.div`
    width:330px;
    height:510px;
    background-color:${({theme})=>theme.card};
    cursor:pointer;
    border-radius:10px;
    box-shadow:0 0 12px 14px rgba(0,0,0.4);
    overflow:hidden;
    padding:26px 20px;
    display:flex;
    flex-direction:column;
    gap:14px;
    transition:all 0.5s ease-in-out;
    &:hover{
        transform:translateY(-10px);
        box-shadow:0 0 50px 4px rgba(0,0,0.6);
        filter:brightness(1.1);
    }

`;
const Image=styled.img`
    width:100%;
    height:180px;
    background-color:${({theme})=>theme.white};
    border-radius:10px;
    box-shadow:0 0 16px 2px rgba(0,0,0.3);
`;

const Details=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:0px;
    padding:0px 2px;
`;
const Title=styled.div`
    font-size:20px;
    font-weight:600;
    color:${({theme})=>theme.text_primary};
    overflow:hidden;
    display:-webkit-box;
    max-width:100%;
    webkit-line-clamp:2;
    webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipse;
`;

const Description=styled.div`
    font-weight:400;
    color:${({theme})=>theme.text_secondary+ 99};
    overflow:hidden;
    margin-top:8px;
`;

const Button=styled.a`
    color:${({theme})=>theme.primary};
    text-decoration:none;
    font-weight:600;
    text-align:center;
`;

const ProjectCard = ({project}) => {
  return (
    <Card>
        <Image src={project.image}/>
        {/* <img src={project.image} alt="" style={{backgroundColor:"${({theme})=>theme.white"}}/> */}
        <Details>
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
        </Details>

        <Button href={project.github} target="_blank">View Code</Button>
    </Card>
  )
}

export default ProjectCard