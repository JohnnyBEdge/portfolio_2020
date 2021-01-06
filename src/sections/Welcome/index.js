import React from 'react';
import {
    WelcomeContainer, WelcomeTitleText, SubTitleText
} from './WelcomeElements';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <WelcomeTitleText>John Martin</WelcomeTitleText>
            <SubTitleText>A fullstack web developer based out of Salt Lake City.</SubTitleText>
        </WelcomeContainer>
    )
}

export default Welcome
