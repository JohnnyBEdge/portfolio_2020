import React, {useState} from 'react';
import Welcome from '../../sections/Welcome';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import About from '../../sections/About';
import Projects from '../../sections/Projects';

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
                <About />
                <Projects />
            </Window>
        </WindowContainer>
    )
}

export default Home
