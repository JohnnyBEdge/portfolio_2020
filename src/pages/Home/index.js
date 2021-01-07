import React from 'react';
import Welcome from '../../sections/Welcome';
import Navbar from '../../components/Navbar';

import {
    WindowContainer, Window
} from './HomeElements';

const Home = () => {
    return (
        <WindowContainer>
            <Window>
                <Navbar />
                <Welcome />
            </Window>
        </WindowContainer>
    )
}

export default Home
