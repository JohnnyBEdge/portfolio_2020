import React, {useState, useContext} from 'react';
import Welcome from '../../pages/Welcome';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Resume from '../../pages/Resume'

import {motion, AnimatePresence} from 'framer-motion'

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
                        <AnimatePresence >
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
                            <Route path="/resume" exact> 
                                <Resume/>
                            </Route>
                            </Switch>
                        </AnimatePresence>
                    </Window>
                </WindowContainer>
        </Router>
    )
}

export default Home
