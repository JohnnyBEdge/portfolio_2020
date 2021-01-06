import styled from 'styled-components';
import backgroundImg from '../../assets/images/halongbay_bw.jpg'

export const WelcomeContainer = styled.section`
    background-image: url(${backgroundImg});
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const WelcomeTitleText = styled.h1`
    color: #FCFCFC;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const SubTitleText = styled.p`
    color: #FCFCFC;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`