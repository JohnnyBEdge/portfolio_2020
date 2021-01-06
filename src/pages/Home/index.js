import React from 'react';
import Welcome from '../../sections/Welcome';
import {
    WindowContainer, Window
} from './HomeElements';

const Home = () => {
    return (
        <WindowContainer>
            <Window>
                <Welcome />
            </Window>
        </WindowContainer>
    )
}

export default Home
