import styled from 'styled-components';
import LoadingBubbles from '../Loading';


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
`
export const Instructions = styled.p`
    display: ${({loading}) => (loading ? 'none' : 'flex')};
    font-size: 15px;
    color: #FCFCFC;
`
export const StatsContainer = styled.ul`
    display: ${({loaded}) => (loaded ? 'flex' : 'none')};
    flex-direction: column;
    list-style: none;
    line-height: 1.5;
    margin-right: 50px;
`
export const Stat = styled.li`
    font-size: 16px;
    color: #FCFCFC;
`
export const GetStatsBtn = styled.button`
    display: ${({loading}) => (loading ? 'none' : 'flex')};
    background-color: #FCFCFC;
    width: 80px;
    height: 35px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`
export const Loader = styled(LoadingBubbles)`
    display: ${({loaded,loading}) => (loaded && !loading ? 'none' : 'flex')}
`