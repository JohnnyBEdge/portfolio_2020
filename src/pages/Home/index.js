import React, {useState} from 'react';
import Welcome from '../../sections/Welcome';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import About from '../../sections/About';
import Projects from '../../sections/Projects';


import {
    WindowContainer, Window,
} from './HomeElements';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";



const Home = () => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    }

    return (
        <Router>
        <WindowContainer>
            <Window>
                <Navbar 
                    toggleSidebar={toggleSidebar} />
                <Sidebar 
                    toggleSidebar={toggleSidebar}
                    openSidebar={openSidebar} />

                <Switch>
                <Route path="/" exact> 
                    <Welcome/>
                </Route>
                <Route path="/about" exact> 
                    <About/>
                </Route>
                <Route path="/projects" exact> 
                    <Projects/>
                </Route>
                </Switch>
            </Window>
        </WindowContainer>
        </Router>
    )
}

export default Home
