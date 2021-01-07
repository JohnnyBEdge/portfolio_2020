import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #FCFCFC;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({openSidebar}) => (openSidebar ? 1: 0)};
    left: ${({openSidebar}) => (openSidebar ? '0': '100%')};

`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px)
    }
`
export const MenuItem = styled(LinkS)`
    text-align: center;
    font-size: 25px;
    list-style: none;
    cursor: pointer;
    padding-top: 25px;

    &:hover {
        background-color: #2B2B2B;
        color: #FCFCFC;
    }
`