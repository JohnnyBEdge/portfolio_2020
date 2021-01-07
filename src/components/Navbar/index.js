import React from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon
} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { useTrail, animated } from 'react-spring'

const Navbar = ({toggleSidebar}) => {

    const trail = useTrail(linkList.length, {opacity: 1});
    const linkList = ['About', 'Projects', 'Resume']

    return (
        <NavbarContainer>
            <HomeIcon>JM</HomeIcon>
            <SectionLinks>
                {/* <SectionLink>About</SectionLink>
                <SectionLink>Projects</SectionLink>
                <SectionLink>Resume</SectionLink> */}
            </SectionLinks>
            <MobileMenuIcon>
                <FaBars 
                    onClick={toggleSidebar}/>
            </MobileMenuIcon>
        </NavbarContainer>
    )
}

export default Navbar;
