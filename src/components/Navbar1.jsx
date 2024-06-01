import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MenuRounded } from '@mui/icons-material'
import { useTheme } from 'styled-components'
import { Info } from '../data/data'

const Nav=styled.div`
    background-color:${({theme})=>theme.bg};
    display:flex;
    align-items:center;
    justify-content:center;
    height:80px;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    color:white;
`;
const NavbarContainer=styled.div`
    background-color:${({theme})=>theme.bg};
    display:flex;
    align-items:center;
    justify-content:center;
    height:80px;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    color:white;
    width:100%;
    max-width:1200px;
    padding: 0 24px;
`;
const NavItems=styled.ul`
    width:100%;
    padding:0 6px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:32px;
    list-style:none;
    @media screen and (max-width:768px){
        display:none;
    }

`;
const NavLink=styled.a`
    text-decoration:none;
    color:${({theme})=>theme.text_primary};
    transition:all 0.2s ease-in-out;
    font-weight:500;
    &:hover{
        color:${({theme})=>theme.primary};
    }

`;
const ButtonContainer=styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0 6px;
    @media screen and (max-width:768px){
        display:none;
    }
    
`;
const GithubButton=styled.a`
    border:1px solid ${({theme})=>theme.primary};
    color:${({theme})=>theme.primary};
    justify-content:center;
    align-items-center;
    border-radius:20px;
    display:flex;
    cursor:pointer;
    padding:10px 20px;
    font-weight:500;
    font-size:16px;
    transition:all 0.6s ease-in-out;
    text-decoration:none;
    &:hover{
        background-color:${({theme})=>theme.primary};
        color:${({theme})=>theme.text_primary}
    }
    
`;
const NavLogo=styled(Link)`
    width:80%;
    font-weight:500;
    font-size:19px;
    color:inherit;
    text-decoration:none;
    padding:0 6px;
`;

const MobileIcon=styled.div`
    height:45%;
    display:flex;
    align-items:center;
    color:${({theme})=>theme.text_primary};
    display:none;
    cursor:pointer;
    &:hover{
        color:${({theme})=>theme.primary}
    }
    @media screen and (max-width:768px) {
        display:block;
    }
`;
const MobileMenu=styled.ul`
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
    list-styole:none;
    padding:12px 40px 24px 40px;
    background-color:${({theme})=>theme.card_light + 90};
    gap:16px;
    position:absolute;
    top:65px;
    right:0;

    transition:all 0.6s ease-in-out;
    transform:${({isOpen})=>isOpen ? "translateY(0)": "translateY(-100)"}
    opacity:${({isOpen})=>(isOpen ? "100%" : "0")};
    z-index:${({isOpen})=>(isOpen ? '1000' : '-1000')};
`;



const Navbar1 = () => {
    const [isOpen,setIsOpen]=useState(false);
    const theme=useTheme();

   
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                Portfolio
            </NavLogo>

            <MobileIcon onClick={()=>setIsOpen(!isOpen)}>
                <MenuRounded/>
            </MobileIcon>
            <NavItems>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Education">Education</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
            </NavItems>

            { 
            isOpen && (
                <MobileMenu>
                <NavLink onClick={()=>setIsOpen(!isOpen)} href="#About">About</NavLink>
                <NavLink onClick={()=>setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
                <NavLink onClick={()=>setIsOpen(!isOpen)} href="#Education">Education</NavLink>
                <NavLink onClick={()=>setIsOpen(!isOpen)} href="#Projects">Projects</NavLink>
                </MobileMenu>
            )
            }

            <ButtonContainer>
                <GithubButton href={Info.github} target="_Blank" style={{
               
                }}>Github profile</GithubButton>
            </ButtonContainer>
        </NavbarContainer>
    </Nav>

  )
}

export default Navbar1
