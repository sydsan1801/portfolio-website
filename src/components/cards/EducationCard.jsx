import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';


const Body=styled.div`
    // background-color:${({theme})=>theme.bg};
`;
const School=styled.div`
    font-size:18px;
    font-weight:600;
    color:${({theme})=>theme.text_primary};
`;
const Degree=styled.div`
    font-size:14px;
    font-weight:500;
    color:${({theme})=>theme.text_primary +99};

`;

const Date=styled.div`
    font-size:12px;
    font-weight:400;
    color:${({theme})=>theme.text_primary +99};

    `;
const Grade=styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    color:${({theme})=>theme.text_primary +99};
`;
const Description=styled.div`
    width:100%;
    font-size:16px;
    font-weight:400;
    color:${({theme})=>theme.text_primary +99};
    margin-bottom:10px;
   
`;
const Span=styled.div`
    display:--webkit-box;
    max-width:100%;
`;

const EducationCard = ({education}) => {
  return (
    <VerticalTimelineElement 
    icon={
        <img width="100%" height="100%" alt={education?.school} style={{borderRadius:"50%",objectFit:"cover"}} src={education?.img}/>
    }

    contentStyle={{
        display:"flex",
        flexDirection:"column",
        gap:"12px",
        // background:"rgba(17,25,40,0.83)",
        background:"#1d1836",
        color:"#fff",
        boxShadow:"rgba(23,92,230,0.15) 0px 4px 24px",
        borderRadius:"10px",
        border:"1px solid rgba(255,255,255,0.15)",
    }}

    contentArrowStyle={{
        borderRight:"9px solid #fff",
    }}

    date={education.date}
    >
            <Body>
                <School>{education.school}</School>
                <Degree>{education.degree}</Degree>
                <Date>{education.date}</Date>
            </Body>
        <Grade>
            <b>Grade:</b>
            {education.grade}
        </Grade>
        <Description>
            {education?.desc && <Span>{education.desc}</Span>}
        </Description>

    </VerticalTimelineElement>
  );
}

export default EducationCard