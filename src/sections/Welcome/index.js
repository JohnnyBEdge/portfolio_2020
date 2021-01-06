import React from 'react';
import {
    WelcomeContainer, WelcomeTitleText, SubTitleText, TextContainer
} from './WelcomeElements';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <TextContainer>
                <WelcomeTitleText>Full Stack Web Developer</WelcomeTitleText>
                {/* <SubTitleText>A fullstack web developer based out of Salt Lake City.</SubTitleText> */}
            </TextContainer>
        </WelcomeContainer>
    )
}

export default Welcome
