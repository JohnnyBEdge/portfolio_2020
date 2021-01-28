import React from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon,
    LinkContainer, IconContainer
} from './NavbarElements';
import {CgMenuRight} from 'react-icons/cg';
import { useSpring } from 'react-spring';

const Navbar = ({toggleSidebar}) => {


    const prop1 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {friction: 220},
        delay: 200
      })

    return (
        <NavbarContainer style={prop1}>
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
