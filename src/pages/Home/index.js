import React, {useState} from 'react';
import Welcome from '../../sections/Welcome';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import {
    WindowContainer, Window
} from './HomeElements';

const Home = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    }
    return (
        <WindowContainer>
            <Window>
                <Navbar 
                    toggleSidebar={toggleSidebar} />
                <Sidebar 
                    toggleSidebar={toggleSidebar}
                    openSidebar={openSidebar} />
                <Welcome />
            </Window>
        </WindowContainer>
    )
}

export default Home
