import React from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon,
    LinkContainer
} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { useSpring, animated } from 'react-spring'

const Navbar = ({toggleSidebar}) => {


    const prop1 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {friction: 220},
        delay: 200
      })
    const prop2 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {friction: 420},
        delay: 400
      })
    const prop3 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {friction: 620},
        delay: 600
      })



    return (
        <NavbarContainer>
            <HomeIcon style={prop1}>JM</HomeIcon>
            <SectionLinks>
                <LinkContainer style={prop1}>
                    <SectionLink>About</SectionLink>
                </LinkContainer>
                <LinkContainer style={prop2}>
                    <SectionLink>Projects</SectionLink>
                </LinkContainer>
                <LinkContainer style={prop3}>
                    <SectionLink>Resume</SectionLink>
                </LinkContainer>
            </SectionLinks>
            <MobileMenuIcon>
                <FaBars 
                    onClick={toggleSidebar}/>
            </MobileMenuIcon>
        </NavbarContainer>
    )
}

export default Navbar;
