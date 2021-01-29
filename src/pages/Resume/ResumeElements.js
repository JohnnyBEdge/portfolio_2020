import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ResumeContainer = styled(motion.section)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`    
export const IResume = styled.iframe`
    width: 80%;
    height: 900px;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        width: 95%;
    }
`