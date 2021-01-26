import React, {useState} from 'react';
import {
	SliderContainer, ProjInfo, Info, ProjLink,
	ProjImage, ProjTitle, ArrowContainer, 
	TitleBottomBorder, TitleTopBorder, Project, 
	ProjInfoContainer, TestDiv, ProjectsContainer
} from './ProjectsElements';
import { projects } from '../../data/data';
import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi';
import uhaImg from '../../assets/images/projectImgs/uha.png'
import KEGroupImg from '../../assets/images/projectImgs/climb1 copy.jpg'

const Projects = () => {
    const [current, setCurrent] = useState(0);

	const length = projects.length;

    const nextProj = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }
    const previousProj = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
	}


	const project = projects.map((proj, idx) => {
		return ( 
				<Project id={idx} key={idx} current={current}>
					<TitleTopBorder></TitleTopBorder>
						<ProjTitle>{proj.name}</ProjTitle>
					<TitleBottomBorder></TitleBottomBorder>
					<ProjInfoContainer>
						{/* <ProjImage src={require('../../assets/images/climb1.jpg')}/> */}
						<ProjImage src={proj.img}/>
						<ProjInfo>
							<Info>{proj.desc}</Info>
							<ProjLink>{proj.live}</ProjLink>
						</ProjInfo>
					</ProjInfoContainer>
				</Project>
			)
	})
	return (
        <ProjectsContainer>
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
                                            {/* <ProjImage src={'/assets/uha copy.png'}/> */}
                                            <ProjImage src={proj.img}/>
                                            <ProjInfo>
                                                <Info>{proj.desc}</Info>
                                                <ProjLink>{proj.live}</ProjLink>
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
