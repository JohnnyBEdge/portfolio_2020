import React from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon,
    LinkContainer, IconContainer
} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { useSpring } from 'react-spring';
import { animateScroll as scroll, Element, scroller} from 'react-scroll'

const Navbar = ({toggleSidebar}) => {

    const scrollHome = () => {
        console.log("SCROLL HOME")
        scroll.scrollToTop();
    }

    const prop1 = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {friction: 220},
        delay: 200
      })

    return (
        <NavbarContainer style={prop1}>
            <IconContainer to="/">
            <HomeIcon 
                onClick={scrollHome}>JM</HomeIcon>
            </IconContainer>
            <SectionLinks>
                <LinkContainer >
                    <SectionLink
                        to="/about" 
                        // spy={true} 
                        // smooth={true} 
                        // duration={500} 
                        // exact='true'
                        // offset={-80}
                        >About</SectionLink>
                </LinkContainer>
                <LinkContainer >
                    <SectionLink 
                        to="/projects"
                        // smooth={true}
                        // duration={500}
                        // spy={true}
                        // exact='true'
                        // offset={-80}
                        >Projects</SectionLink>
                </LinkContainer>
                <LinkContainer >
                    <SectionLink to='#'>Resume</SectionLink>
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
