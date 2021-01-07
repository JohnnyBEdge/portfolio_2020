import React from 'react';
import {useSpring} from 'react-spring';
import {
    WelcomeContainer, WelcomeTitleText, SubTitleText, TextContainer
} from './WelcomeElements';

const Welcome = () => {
    
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {friction: 220},
        delay: 500
      })

    return (
        <WelcomeContainer>
            <TextContainer style={props}>
                <WelcomeTitleText>Full Stack Web Developer</WelcomeTitleText>
                
                {/* <SubTitleText>A fullstack web developer based out of Salt Lake City.</SubTitleText> */}
            </TextContainer>
        </WelcomeContainer>
    )
}

export default Welcome
