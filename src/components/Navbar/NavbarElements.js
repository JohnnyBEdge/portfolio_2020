import styled from 'styled-components';
import {Link} from 'react-scroll';

export const NavbarContainer = styled.div`
    height: 80px;
    position: absolute;
    background-color: transparent;
    width: 95%;
    display: flex;
    justify-content: space-between;

`
export const HomeIcon = styled.div`
    width: 50px;
    height: 50px;
    border: solid black 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 25px;
    color: #202020;
    cursor: pointer;

    &:hover{
        background-color: #FCFCFC;
        transition: 0.3s all ease;
    }
`
export const SectionLinks = styled.ul`
    width: 400px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    color: #202020;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const SectionLink = styled(Link)`
    font-size: 20px;
`
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