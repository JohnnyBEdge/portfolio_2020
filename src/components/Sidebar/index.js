import React from 'react';
import {
    SidebarContainer, SidebarMenu, MenuItem
} from './SidebarElements';

const Sidebar = ({openSidebar, toggleSidebar}) => {



    return (
        <SidebarContainer 
        openSidebar={openSidebar}
        onClick={toggleSidebar}>
            
            <SidebarMenu>
                <MenuItem 
                    to='/'
                    onClick={toggleSidebar}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>Home</MenuItem>
                <MenuItem 
                    to='about' 
                    onClick={toggleSidebar}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>About</MenuItem>
                <MenuItem 
                    to='projects'
                    onClick={toggleSidebar}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>Projects</MenuItem>
                <MenuItem 
                    to='resume'
                    onClick={toggleSidebar}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>Resume</MenuItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
