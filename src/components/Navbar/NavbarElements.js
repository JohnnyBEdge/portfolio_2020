import styled from 'styled-components';
import {Link} from 'react-scroll';
import {animated} from 'react-spring';


export const NavbarContainer = styled.div`
    height: 80px;
    margin-top: -80px;
    position: sticky;
    top: 0;
    left: 0;
    /* background: ${({scrollNav}) => (scrollNav ? 'red' : 'green')}; */
    background-color: #232222;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
   

`
export const HomeIcon = styled(animated.div)`
    width: 50px;
    height: 50px;
    border: solid #FCFCFC 1px;
    /* border: solid black 1px; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 25px;
    color: #FCFCFC;
    cursor: pointer;

    &:hover{
        background-color: whitesmoke;
        transition: 0.3s all ease;
    }
`
export const SectionLinks = styled(animated.ul)`
    width: 400px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    color: #FCFCFC;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const LinkContainer = styled(animated.div)`

`
export const SectionLink = styled(Link)`
    font-size: 20px;
    height: 25px;
    text-align: center;
    cursor: pointer;
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