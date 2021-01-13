import React, {useEffect, useState} from 'react'
import { getCurrentCodewarsStats } from '../../api/codeWarsAPI';
import {
    CodewarsContainer, CodewarsTitle, Stat, 
    Instructions, GetStatsBtn, Loader, StatsContainer
} from './CodewarsElements';

const Codewars = () => {

    const [cwStats, setCWStats] = useState(null);
    const [isLoading, setIsLoading] = useState(0);
    const [loaded, setLoaded] = useState(0);

    console.log(cwStats)

    const getStats = () => {
        getCurrentCodewarsStats().then((stats) => {
            setCWStats(stats);
        }).then( setLoaded(1))
    };
 

    return (
        <CodewarsContainer>
            <CodewarsTitle>Codewars Statistics</CodewarsTitle>
            
            <Instructions loading={isLoading}>Click the button to get my latest Codewars.com stats!</Instructions>
            <Loader/>
            
            
            <GetStatsBtn
                onClick={() => {
                    setIsLoading(1);
                    getStats();
                }}>
                    Get Stats!
            </GetStatsBtn>

            <StatsContainer loaded={loaded} loading={isLoading}>
                <Stat>Overall:</Stat>
                <Stat>Completed Challenges:</Stat>
                <Stat>Javascript:</Stat>
                <Stat>SQL:</Stat>
            </StatsContainer>

        </CodewarsContainer>
    )
}

export default Codewars
