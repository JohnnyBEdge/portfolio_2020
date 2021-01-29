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
                    onClick={toggleSidebar}>Home</MenuItem>
                <MenuItem 
                    to='/about' 
                    onClick={toggleSidebar}>About</MenuItem>
                <MenuItem 
                    to='/projects'
                    onClick={toggleSidebar}>Projects</MenuItem>
                <MenuItem 
                    to='/resume'
                    onClick={toggleSidebar}>Resume</MenuItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
