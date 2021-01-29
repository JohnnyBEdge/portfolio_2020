import styled from 'styled-components';
import Slider from "@farbenmeer/react-spring-slider";

export const SliderComponent = styled(Slider)`
`
export const Gallery = styled.div`
  display: flex;
  width: 70%;
  min-width: 300px;
  height: 70%;
  min-height: 330px;

  @media screen and (max-width: 768px){
    width: 100px;
    height: 100px;
    margin: 20px 0;
  }
`
export const SliderImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: 100%;
  object-fit: cover;
`