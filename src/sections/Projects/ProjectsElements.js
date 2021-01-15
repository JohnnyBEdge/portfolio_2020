import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: #232222;
    color: white;
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
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
export const Project = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
export const ArrowContainer = styled.div`
    cursor: pointer;
`
export const ProjImage = styled.img`
    width: 40%;
    height: auto;
    border: 5px #FCFCFC solid;
    border-radius: 5px;
`
export const ProjInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 350px;
    justify-content: center;
    align-items: center;
`
export const Info = styled.p`
    color: #FCFCFC;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
`
export const ProjLink = styled.a`
    color: #FCFCFC;
    font-family: 'Gothic A1', sans-serif;
    font-weight: bold;
    font-size: 25px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
`

