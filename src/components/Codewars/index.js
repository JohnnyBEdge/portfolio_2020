import React, {useEffect, useState} from 'react'
import { getCurrentCodewarsStats } from '../../api/codeWarsAPI';
import {
    CodewarsContainer, CodewarsTitle, Stat, 
    Instructions, GetStatsBtn
} from './CodewarsElements';

const Codewars = () => {
    //make API call here via button click
    //conditionally render stat based on languages and scores retrieved from GET
    const [cwStats, setCWStats] = useState(null);

    const getStats = () => {
        getCurrentCodewarsStats().then((stats) => {
            setCWStats(stats);
        })
    };
    // useEffect(() => {
    //     getCurrentCodewarsStats().then((stats) => {
    //         setCWStats(stats);
    //         console.log("STATS",stats)
    //     });
    // }, []);
    return (
        <CodewarsContainer>
            <CodewarsTitle>Codewars Statistics</CodewarsTitle>
            <Instructions>Click the button to get my latest Codewars.com stats!</Instructions>
            <GetStatsBtn
                onClick={getStats}>
                    Get Stats!
            </GetStatsBtn>
            
            <Stat>Overall:</Stat>
            <Stat>Javascript:</Stat>
            <Stat>SQL:</Stat>
        </CodewarsContainer>
    )
}

export default Codewars
