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
                <MenuItem onClick={toggleSidebar}>Home</MenuItem>
                <MenuItem onClick={toggleSidebar}>About</MenuItem>
                <MenuItem onClick={toggleSidebar}>Projects</MenuItem>
                <MenuItem onClick={toggleSidebar}>Resume</MenuItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
