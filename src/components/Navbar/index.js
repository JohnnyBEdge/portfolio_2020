import React from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon
} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
        <NavbarContainer>
            <HomeIcon>JM</HomeIcon>
            <SectionLinks>
                <SectionLink>About</SectionLink>
                <SectionLink>Projects</SectionLink>
                <SectionLink>Resume</SectionLink>
            </SectionLinks>
            <MobileMenuIcon>
                <FaBars/>
            </MobileMenuIcon>
        </NavbarContainer>
    )
}

export default Navbar;
