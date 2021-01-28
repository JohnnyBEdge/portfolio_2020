import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'
import {animated} from 'react-spring';


export const NavbarContainer = styled(animated.div)`
    height: 80px;
    margin-top: -80px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #232222;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const IconContainer = styled(LinkR)`
    text-decoration: none;
    width: 50px;
    height: 50px;
    border: solid #FCFCFC 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
    font-weight: bold;
    font-size: 25px;
    color: #FCFCFC;

    &:hover{
        background-color: whitesmoke;
        transition: 0.3s all ease;
    }
`
export const HomeIcon = styled.p`
    padding: 7px;
    &:hover{
        color: black;
        transition: 0.3s all ease;
    }
`
export const SectionLinks = styled.ul`
    width: 400px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    color: #FCFCFC;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const LinkContainer = styled.div`

`
export const SectionLink = styled(LinkR)`
    font-size: 20px;
    height: 25px;
    text-align: center;
    text-decoration: none;
    color: #FCFCFC;
    cursor: pointer;
`
// export const SectionLink = styled(LinkS)`
//     font-size: 20px;
//     height: 25px;
//     text-align: center;
//     cursor: pointer;
// `
export const MobileMenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #2B2B2B;
    }
`