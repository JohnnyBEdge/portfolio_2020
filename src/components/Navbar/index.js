import React, {useState, useEffect} from 'react';
import {
    NavbarContainer, HomeIcon, SectionLinks, SectionLink, MobileMenuIcon,
    LinkContainer
} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';


const Navbar = ({toggleSidebar}) => {

    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {

        if(window.scrollY >= 80){
            setScrollNav(true);
            console.log(window.scrollY)

        } else {
            setScrollNav(false);
        }
    };


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

    useEffect(() => {
        
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
        <NavbarContainer scrollNav={scrollNav}>
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
        </>
    )
}

export default Navbar;
