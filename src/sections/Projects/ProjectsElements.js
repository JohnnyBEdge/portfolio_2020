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
`
export const SliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    /* height: 100%; */
    align-items: center;
    align-self: center;

`
export const Project = styled.div`
    display: flex; 
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* justify-self: center; */
    /* align-self: center; */
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
`
export const ProjInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const ProjImage = styled.img`
    min-width: 400px;
    width: 40%;
    height: 400px;
    border: 5px #FCFCFC solid;
    border-radius: 5px;
`
export const ProjInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    min-width: 500px;
    height: 350px;
    justify-content: center;
    align-items: center;
`

export const Info = styled.p`
    color: #FCFCFC;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding: 10px;
    width: 90%;
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

    &:hover {
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
`
export const ArrowContainer = styled.div`
    cursor: pointer;
    margin: 10px;
`
