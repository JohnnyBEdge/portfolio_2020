import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: #232222;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-evenly; */
    @media screen and (max-width: 768px){
        /* padding-top: 50px; */
        height: auto;
    }
`
export const SectionTitle = styled.h2`
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        font-size: 20px;
        font-family: "Gothic A1", sans-serif;
        font-size: 20px;
        color: #FCFCFC;
        text-align: center;
        margin-top: 20px;
        padding-bottom: 0;
    }
`
export const SliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
        align-items: flex-start;
        margin-top: 10px;
    }

`
export const Project = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const TitleTopBorder = styled.div`
    height: 3px;
    background-color: #FCFCFC;
    width: 50%;
    margin: 0;
    padding: 0;
    align-self: center;
`
export const TitleBottomBorder = styled.div`
    height: 3px;
    background-color: #FCFCFC;
    width: 70%;
    margin: 0;
    padding: 0;
    align-self: center;
    margin-bottom: 50px;
`

export const ProjTitle = styled.h3`
    font-family: "Gothic A1", sans-serif;
    font-size: 30px;
    color: #FCFCFC;
    text-align: center;
    margin: 10px;
    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`
export const ProjInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const ProjImage = styled.img`
    width: 45%;
    min-width: 300px;
    height: 45%;
    border: 5px #FCFCFC solid;
    border-radius: 5px;
    /* @media screen and (max-width: 768px){
        min-width: 300px;
    } */
`
export const ProjInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 350px;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: flex-start;
    }
`

export const Info = styled.p`
    color: #FCFCFC;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding: 10px;
    width: 90%;
    @media screen and (max-width: 768px){
        margin: 15px 0;
        width: 100%;
        padding: 3px;
    }
`
export const LinkContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`
export const ProjLink = styled.a`
    color: #FCFCFC;
    font-family: 'Gothic A1', sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 768px){
        font-size: 16px;
        margin-top: 5px;
    }

    &:hover {
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
`
export const LArrowContainer = styled.div`
    cursor: pointer;
    margin: 10px;

    @media screen and (max-width: 768px){
        position: relative;
        left: 20px;
    }
`
export const RArrowContainer = styled.div`
    cursor: pointer;
    margin: 10px;

    @media screen and (max-width: 768px){
        position: relative;
        right: 20px;
    }
`
