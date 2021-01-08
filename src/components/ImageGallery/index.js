import React, { useState, useEffect } from 'react'
import { useTransition, config } from 'react-spring';
import { animated } from 'react-spring';
import { Gallery } from './ImageGalleryElements';
import img1 from '../../assets/images/climb1.jpg';
import img2 from '../../assets/images/climb2.JPG';
import img3 from '../../assets/images/head_shot.JPG';
import img4 from '../../assets/images/profile-pic.png';

const ImageGallery = () => {

    const slides = [
        { id: 0, url: img1 },
        { id: 1, url: img2 },
        // { id: 2, url: img3 },
        // { id: 3, url: img4 },
      ]
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), [])

    return transitions.map(({ item, props, key }) => (
        <Gallery
          key={key}
          style={{ ...props, backgroundImage: `url(${item.url}` }}
        />
      ))
    // return (
    //     <Gallery
    //         key={key}
    //         class="bg"
    //         style={{...PaymentResponse, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`}}>

    //     </Gallery>
    // )
}

export default ImageGallery
