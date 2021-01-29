import React from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon,
    LinkContainer, IconContainer
} from './NavbarElements';
import {CgMenuRight} from 'react-icons/cg';

const Navbar = ({toggleSidebar}) => {

    return (
        <NavbarContainer>
            <IconContainer to="/">
            <HomeIcon>JM</HomeIcon>
            </IconContainer>
            <SectionLinks>
                <LinkContainer >
                    <SectionLink
                        to="/about"
                        >About</SectionLink>
                </LinkContainer>
                <LinkContainer >
                    <SectionLink 
                        to="/projects"
                        >Projects</SectionLink>
                </LinkContainer>
                <LinkContainer >
                    <SectionLink to='/resume'>Resume</SectionLink>
                </LinkContainer>
            </SectionLinks>
            <MobileMenuIcon>
                <CgMenuRight 
                    onClick={toggleSidebar}/>
            </MobileMenuIcon>
        </NavbarContainer>
    )
}

export default Navbar;
