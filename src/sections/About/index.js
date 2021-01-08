import React from 'react'
import ImageGallery from '../../components/ImageGallery'
import { 
    AboutContainer, PersonalDetails, GalleryContainer,
    DetailsTextContainer, DetailsTitle, DetailsText,
    TechContainer
 } from './AboutElements'

const About = () => {
    return (
        <AboutContainer>
            <PersonalDetails>
                <GalleryContainer>
                    <ImageGallery/>
                </GalleryContainer>
                <DetailsTextContainer>
                    <DetailsTitle>John Martin</DetailsTitle>
                    <DetailsText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis minus beatae dolor ratione porro vero eos vel velit. Harum enim quo corporis autem sed molestias, quam neque. Facilis perferendis minus dolore, optio adipisci distinctio aspernatur. Pariatur hic ullam possimus.</DetailsText>
                </DetailsTextContainer>
            </PersonalDetails>
            <TechContainer>
                Tech container
            </TechContainer>
        </AboutContainer>
    )
}

export default About
