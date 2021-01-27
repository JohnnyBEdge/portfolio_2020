import React, {useState} from 'react';
import {
	SliderContainer, ProjInfo, Info, ProjLink,
	ProjImage, ProjTitle, ArrowContainer, 
	TitleBottomBorder, TitleTopBorder, Project, 
    ProjInfoContainer, TestDiv, ProjectsContainer,
    LinkContainer
} from './ProjectsElements';
import { projects } from '../../data/data';
import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi';

const Projects = () => {
    const [current, setCurrent] = useState(0);

	const length = projects.length;

    const nextProj = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }
    const previousProj = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
	}

	return (
        <ProjectsContainer id="projects">
            <SliderContainer>

                <ArrowContainer onClick={previousProj}>
                    <FiChevronsLeft size="3em"/>
                </ArrowContainer>
                    {projects.map((proj, idx) => {
                        return (
                            <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                                {idx === current && (
                                    <Project id={idx} key={idx} current={current}>
                                        <TitleTopBorder></TitleTopBorder>
                                            <ProjTitle>{proj.name}</ProjTitle>
                                        <TitleBottomBorder></TitleBottomBorder>
        
                                        <ProjInfoContainer>
                                            <ProjImage src={proj.img}/>
                                            <ProjInfo>
                                                <Info>{proj.desc}</Info>
                                                <LinkContainer>
                                                    <ProjLink 
                                                        href={proj.live} 
                                                        target="_blank">See it live!</ProjLink>
                                                    {proj.github ? <ProjLink 
                                                        href={proj.github} 
                                                        target="_blank">View the code!</ProjLink> : ''}
                                                </LinkContainer>
                                            </ProjInfo>
                                        </ProjInfoContainer>
                
                                    </Project>
                                )}

                            </div>
                        )
                    })}

                <ArrowContainer onClick={nextProj}>
                    <FiChevronsRight size="3em"/>
                </ArrowContainer>

                

            </SliderContainer>
        </ProjectsContainer>
	)
}

export default Projects;
