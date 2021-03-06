import React from 'react'
import Codewars from '../../components/Codewars'
import ImageGallery from '../../components/ImageGallery'
import { 
    AboutContainer, PersonalDetails, GalleryContainer,
    DetailsTextContainer, DetailsTitle, DetailsText,
    TechContainer, TechList, TechListItem, TechTitle,
    CodewarsStatsContainer, ListContainer
 } from './AboutElements';
 import {techList} from '../../data/data';


const About = () => {

    return (
            <AboutContainer id="about"
                initial={{opacity: 0, y: 200}}    
                animate={{opacity: 1, y : 0}}
                exit={{opacity: 0, y: 200}}>
                <PersonalDetails >
                    <GalleryContainer >
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
                            {techList.map((item,idx) => (<TechListItem key={idx}>{item}</TechListItem>))}
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
