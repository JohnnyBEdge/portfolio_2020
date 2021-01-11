import React from 'react';
import img1 from '../../assets/images/climb1.jpg';
import img2 from '../../assets/images/climb2.JPG';
import img3 from '../../assets/images/head_shot.JPG';
import img4 from '../../assets/images/profile-pic.png';
import {
    Gallery, SliderImage, SliderComponent
} from './ImageGalleryElements'


const ImageGallery = () => {

	return (
        <Gallery>
            <SliderComponent
                activeIndex={2}
                auto={3000}
            >
                <SliderImage src={img1}/>
                <SliderImage src={img2}/>
                <SliderImage src={img3}/>
                <SliderImage src={img4}/>
            </SliderComponent>
        </Gallery>
	);
};

export default ImageGallery;

