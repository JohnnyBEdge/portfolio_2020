import React from 'react';
import img1 from '../../assets/images/profile-pic.webp';
import img2 from '../../assets/images/climb2.webp';
import img3 from '../../assets/images/head_shot.webp';
import img4 from '../../assets/images/climb1.webp';
import img5 from '../../assets/images/family.webp';
import img6 from '../../assets/images/skate.webp';
import {
    Gallery, SliderImage, SliderComponent
} from './ImageGalleryElements'


const ImageGallery = () => {

	return (
        <Gallery>
            <SliderComponent
                activeIndex={2}
                auto={4500}
            >
                <SliderImage src={img3}/>
                <SliderImage src={img2}/>
                <SliderImage src={img1}/>
                <SliderImage src={img4}/>
                <SliderImage src={img5}/>
                <SliderImage src={img6}/>
            </SliderComponent>
        </Gallery>
	);
};

export default ImageGallery;

