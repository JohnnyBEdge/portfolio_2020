import styled from 'styled-components';

export const CodewarsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CodewarsTitle = styled.h4`
    font-size: 20px;
    color: #FCFCFC;
    text-align: center;
    margin-bottom: 15px;

    @media screen and (max-width: 768px){
        margin-top: 20px;
        width: 200px;
    }

`
export const Instructions = styled.p`
    display: ${({loaded}) => (loaded ? 'none' : 'flex')};
    font-size: 15px;
    color: #FCFCFC;
    margin: 10px;

    @media screen and (max-width: 768px){
        width: 200px;
        margin: 0;
        margin-bottom: 10px;
    }
`
export const StatsContainer = styled.ul`
    display: ${({loaded}) => (loaded ? 'flex' : 'none')};
    flex-direction: column;
    list-style: none;
    line-height: 1.5;
    margin-right: 50px;
    
    @media screen and (max-width: 768px){
        width: 250px;
        margin: 0 auto;
        margin-bottom: 20px;
        text-align: justify;
    }
`
export const Stat = styled.li`
    font-size: 16px;
    color: #FCFCFC;
`
export const GetStatsBtn = styled.button`
    display: ${({loaded}) => (loaded ? 'none' : 'flex')};
    background-color: #FCFCFC;
    width: 120px;
    height: 35px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
`
export const LoaderContainer = styled.div`
    display: ${({isLoading}) => (isLoading ? 'flex' : 'none')}
`
