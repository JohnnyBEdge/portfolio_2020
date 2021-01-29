import React from 'react';
import {
    WelcomeContainer, WelcomeTitleText, TextContainer
} from './WelcomeElements';

const Welcome = () => {

    return (
            <WelcomeContainer
                initial={{opacity: 0}}    
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <TextContainer >
                    <WelcomeTitleText>Full Stack Web Developer</WelcomeTitleText>
                </TextContainer>
            </WelcomeContainer>
    )
}

export default Welcome
