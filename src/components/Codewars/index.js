import React, {useEffect, useState} from 'react'
import { getCurrentCodewarsStats } from '../../api/codeWarsAPI';
import {
    CodewarsContainer, CodewarsTitle, Stat, 
    Instructions, GetStatsBtn, Loader, StatsContainer,
    LoaderContainer
} from './CodewarsElements';
import LoadingBubbles from '../Loading';

const Codewars = () => {

    const [total, setTotal] = useState(null);
    const [overall, setOverall] = useState(null);
    const [languages, setLanguages] = useState([]);
    // const [cwStats, setCWStats] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [errMsg, setErrMsg] = useState(false);

    

    const getStats = async() => {
        await setIsLoading(true);
        await getCurrentCodewarsStats().then((stats) => {
            stats.status === 200 ? setStats(stats) : setErrMsg(true)
        })
        await setIsLoading(false)
        await setLoaded(true)
    };

    // const getStats = () => {
    //     setIsLoading(true);
    //     getCurrentCodewarsStats().then((stats) => {
    //         setStats(stats);
    //         // setTotal(stats.data.codeChallenges.totalCompleted);
    //         // console.log(stats.data.codeChallenges.totalCompleted)
    //         // setOverall(stats.data.ranks.overall.name);
    //         // setLanguages(...stats.data.ranks.languages);
    //     }).then( setIsLoading(false))
    //     .then(setLoaded(true))
    // };

 const setStats = (stats) => {
    setTotal(stats.data.codeChallenges.totalCompleted);
    console.log("total",stats.data.codeChallenges.totalCompleted)
    setOverall(stats.data.ranks.overall.name);
    console.log("overall",stats.data.ranks.overall.name)
    setLanguages(stats.data.ranks.languages);
    console.log("languages",stats.data.ranks.languages)
 }

 const arr = Object.entries(languages);
 let item = arr.map((item) => {
     return <Stat>{item[0].charAt(0).toUpperCase() + item[0].slice(1)} : {item[1].name}</Stat>
 });
    return (
        <CodewarsContainer>
            <CodewarsTitle>Codewars Statistics</CodewarsTitle>
            
            <Instructions loaded={loaded} >Click the button to get my latest Codewars.com stats!</Instructions>
            <LoaderContainer isLoading={isLoading}>
                <LoadingBubbles />
            </LoaderContainer>
            
            <GetStatsBtn
                loaded={loaded}
                onClick={() => {
                    setIsLoading(true);
                    getStats();
                }}>
                    Get Stats!
            </GetStatsBtn>
            
            {errMsg ? 
                'The was an error retrieving the data; please try again.' 
                : 
                <StatsContainer loaded={loaded}>
                <Stat>Overall: {overall}</Stat>
                <Stat>Completed Challenges: {total} </Stat>
                {item}
            </StatsContainer>
            }


        </CodewarsContainer>
    )
}

export default Codewars
