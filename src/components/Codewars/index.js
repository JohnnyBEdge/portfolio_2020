import React, {useEffect, useState} from 'react'
import { getCurrentCodewarsStats } from '../../api/codeWarsAPI';
import {
    CodewarsContainer, CodewarsTitle, Stat, 
    Instructions, GetStatsBtn, Loader, StatsContainer,
    LoaderContainer
} from './CodewarsElements';
import LoadingBubbles from '../Loading';

const Codewars = () => {

    const [cwStats, setCWStats] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    console.log(cwStats)

    const getStats = () => {
        setIsLoading(true);
        getCurrentCodewarsStats().then((stats) => {
            setCWStats(stats);
        }).then( setIsLoading(false))
        .then(setLoaded(true))
    };
 

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

            <StatsContainer loaded={loaded}>
                <Stat>Overall:</Stat>
                <Stat>Completed Challenges:</Stat>
                <Stat>Javascript:</Stat>
                <Stat>SQL:</Stat>
            </StatsContainer>

        </CodewarsContainer>
    )
}

export default Codewars
