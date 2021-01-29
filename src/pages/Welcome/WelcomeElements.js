import styled from 'styled-components';
import backgroundImg from '../../assets/images/halongbay_bw.jpg';
import {motion} from 'framer-motion'


export const WelcomeContainer = styled(motion.section)`
    background-image: url(${backgroundImg});
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const TextContainer = styled.div`
    height: 275px;
    width: 275px;
    border: solid black 2px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,.3);
    margin: 25px;

`
export const WelcomeTitleText = styled.h1`
    color: #FCFCFC;
    font-size: 55px;
    font-family: 'Gothic A1', sans-serif;
    padding: 15px;
`
// export const SubTitleText = styled.p`
//     color: #FCFCFC;
//     font-size: 15px;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
// `