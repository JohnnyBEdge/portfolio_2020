import styled from 'styled-components';
import {motion} from 'framer-motion'

export const AboutContainer = styled(motion.section)`
    width: 100%;
    height: 100%;
    background-color: #232222;
    color: white;
    @media screen and (max-width: 768px){
        height: auto;
        margin-top: 80px;
    }
`
export const PersonalDetails = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 100%;
    }
`
export const GalleryContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 90%;
    }
`
export const DetailsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 768px){
        width: 90%;
    }
`
export const DetailsTitle = styled.h2`
    color: #FCFCFC;
    font-size: 30px;
    text-align: center;
    font-family: 'Gothic A1', sans-serif;
`
export const DetailsText = styled.p`
    color: #FCFCFC;
    font-size: 20px;
    line-height: 1.5;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
`
export const TechContainer = styled.div`
    height: 30%;
    width: 100%;
    display: flex;

    @media screen and (max-width: 768px){
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
`
export const ListContainer = styled.div`
    width: 60%;
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const TechTitle = styled.h4`
    font-size: 20px;
    color: #FCFCFC;
    text-align: center;
    margin-bottom: 15px;
`
export const TechList = styled.ul`
    list-style: none;
    columns: 3;
    line-height: 1.5;
    text-align: center;
`
export const TechListItem = styled.li`
    margin-right: 20px;
`
export const CodewarsStatsContainer = styled.div`
    width: 40%;
    height: 100%;
`