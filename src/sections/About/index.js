import React from 'react'
import Codewars from '../../components/Codewars'
import ImageGallery from '../../components/ImageGallery'
import { 
    AboutContainer, PersonalDetails, GalleryContainer,
    DetailsTextContainer, DetailsTitle, DetailsText,
    TechContainer, TechList, TechListItem, TechTitle,
    CodewarsStatsContainer, ListContainer
 } from './AboutElements';

const About = () => {

    return (
        <AboutContainer>
            <PersonalDetails>
                <GalleryContainer>
                    <ImageGallery/>
                </GalleryContainer>
                <DetailsTextContainer>
                    <DetailsTitle>John Martin</DetailsTitle>
                    <DetailsText>A full-stack developer based in Salt Lake City, Utah. From teaching in Asia, to working in the fast paced world of fulfillment, my background has provided me with diverse skills giving me an advantage in the world of tech. </DetailsText>
                    <DetailsText>Always looking to improve, whether it be a tool, a project, an environment or myself, I am continuously seeking new opportunities for growth. </DetailsText>
                </DetailsTextContainer>
            </PersonalDetails>
            <TechContainer>
                <ListContainer>
                    <TechTitle>Current Technologies:</TechTitle>
                    <TechList>
                        <TechListItem>HTML/CSS</TechListItem>
                        <TechListItem>JavaScript</TechListItem>
                        <TechListItem>NodeJs</TechListItem>
                        <TechListItem>ExpressJS</TechListItem>
                        <TechListItem>React</TechListItem>
                        <TechListItem>SQL</TechListItem>
                        <TechListItem>Python</TechListItem>
                        <TechListItem>AWS</TechListItem>
                        <TechListItem>MongoDB</TechListItem>
                        <TechListItem>Git/Github</TechListItem>
                        <TechListItem>Figma</TechListItem>
                        <TechListItem>pgAdmin</TechListItem>
                    </TechList>
                </ListContainer>
                <CodewarsStatsContainer>
                    <Codewars />
                </CodewarsStatsContainer>
            </TechContainer>
        </AboutContainer>
    )
}

export default About
