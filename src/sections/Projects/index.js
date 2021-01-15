import React from 'react'
import { 
    ProjectsContainer, ProjTitle, Project,
    ArrowContainer, ProjImage, ProjInfo,
    Info, ProjLink, TitleTopBorder, 
    TitleBottomBorder
 } from './ProjectsElements';
 import tempImg from '../../assets/images/IMG_1492.jpg';
 import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi';

const Projects = () => {
    return (
        <ProjectsContainer>

            <TitleTopBorder></TitleTopBorder>
                <ProjTitle>Project Title</ProjTitle>
            <TitleBottomBorder></TitleBottomBorder>
            
            <Project>
                <ArrowContainer>
                    <FiChevronsLeft size="3em"/>
                </ArrowContainer>
                <ProjImage src={tempImg}/>
                <ProjInfo>
                    <Info>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed delectus beatae labore quia accusamus eum aut maxime sit mollitia!
                    </Info>
                    <ProjLink>Project Link</ProjLink>
                </ProjInfo>
                <ArrowContainer>
                    <FiChevronsRight size="3em"/>
                </ArrowContainer>
            </Project>
        </ProjectsContainer>
    )
}

export default Projects;
