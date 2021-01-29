import React from 'react'
import {
    ResumeContainer, IResume
} from './ResumeElements'

const Resume = () => {
    return (
            <ResumeContainer
                initial={{opacity: 0, y: 200}}    
                animate={{opacity: 1, y : 0}}
                exit={{opacity: 0, y: 200}}>
                <IResume title="resume" src="/assets/portfolio-resume.pdf"></IResume>
            </ResumeContainer>
    )
}

export default Resume
