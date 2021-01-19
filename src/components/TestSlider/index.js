// import React, {useState} from 'react';
// import tempImg1 from '../../assets/images/IMG_1492.jpg';
// import tempImg2 from '../../assets/images/climb2.JPG';
// import tempImg3 from '../../assets/images/IMG_2245 (1).JPG';
// import {
// 	SliderContainer, ProjInfo, Info, ProjLink,
// 	ProjImage, ProjTitle, ArrowContainer, 
// 	TitleBottomBorder, TitleTopBorder, Project, 
// 	ProjInfoContainer, TestDiv
// } from './TestSliderElements';
// import { projects } from '../../data/data';
// import {FiChevronsLeft,FiChevronsRight} from 'react-icons/fi';


// const TestSlider = () => {
// 	const [current, setCurrent] = useState(0);

// 	const length = projects.length;

//     const nextProj = () => {
//         setCurrent(current === length -1 ? 0 : current + 1);
//     }
//     const previousProj = () => {
//         setCurrent(current === 0 ? length -1 : current - 1);
// 	}

// 	console.log("CURRENT", current)


// 	const project = projects.map((proj, idx) => {
// 		return ( 
// 				<Project id={idx} key={idx} current={current}>
// 					<TitleTopBorder></TitleTopBorder>
// 						<ProjTitle>{proj.name}</ProjTitle>
// 					<TitleBottomBorder></TitleBottomBorder>
// 					<ProjInfoContainer>
// 						<ProjImage src={proj.img}/>
// 						<ProjInfo>
// 							<Info>{proj.desc}</Info>
// 							<ProjLink>{proj.live}</ProjLink>
// 						</ProjInfo>
// 					</ProjInfoContainer>
// 				</Project>
// 			)
// 	})
// 	return (
// 		<SliderContainer>

// 			<ArrowContainer onClick={previousProj}>
// 				<FiChevronsLeft size="3em"/>
// 			</ArrowContainer>

			
// 				{projects.map((proj, idx) => {
// 					return (
// 						<div className={idx === current ? 'slide active' : 'slide'} key={idx}>
// 							{idx === current && (
// 								<Project id={idx} key={idx} current={current}>

// 								 			{/* <TitleTopBorder></TitleTopBorder>
// 								 				<ProjTitle>{proj.name}</ProjTitle>
// 								 			<TitleBottomBorder></TitleBottomBorder>
			
// 								 			<ProjInfoContainer>
// 												<ProjImage src={proj.img}/>
// 								 				<ProjInfo>
// 													<Info>{proj.desc}</Info>
// 								 					<ProjLink>{proj.live}</ProjLink>
// 								 				</ProjInfo>
// 								 			</ProjInfoContainer> */}
			
// 								 		</Project>
// 							)}

// 						</div>
// 					)
// 				})}
			
// 				{/* {project} */}

// 			<ArrowContainer onClick={nextProj}>
// 				<FiChevronsRight size="3em"/>
// 			</ArrowContainer>

			

// 		</SliderContainer>
// 	)
// }

// export default TestSlider
