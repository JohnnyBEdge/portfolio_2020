import styled from 'styled-components';
import {animated} from 'react-spring';
import Slider from "@farbenmeer/react-spring-slider";

export const SliderComponent = styled(Slider)`
    /* height: 200px;
    width: 200px; */
`
export const Gallery = styled.div`
  display: flex;
  width: 600px;
  height: 100%;
`
export const SliderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`