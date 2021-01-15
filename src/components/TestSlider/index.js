import React from 'react';

import {projects} from '../../data/data';
import PropTypes from 'prop-types';
import proj1img from '../../assets/images/climb1.jpg';
import proj2img from '../../assets/images/climb2.JPG';
import proj3img from '../../assets/images/head_shot.JPG';
import {ImageR, SliderComponent} from './TestSliderElements'

const TestSlider = () => {
	const onSlideChange = (index) => console.log(`changed to slide ${index}`);
	const setSlideCustom = () => 1;

	const ArrowComponent = ({ onClick, direction }) => {
		return (
			<div
				style={{
					border: "1px solid black",
					padding: "1em",
					backgroundColor: "white",
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
	};

    // console.log("PROJS",...projects.map(item => item.img))

	ArrowComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		direction: PropTypes.string.isRequired,
    };
    


	return (
		<SliderComponent
			activeIndex={0}
			slidesAtOnce={1}
			auto
			ArrowComponent={ArrowComponent}
			onSlideChange={onSlideChange}
			setSlideCustom={setSlideCustom}
		>

            <ImageR src={proj1img} />
		</SliderComponent>
	);
};
export default TestSlider;