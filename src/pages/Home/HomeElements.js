import styled from 'styled-components';

export const WindowContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FCFCFC;
    min-width: 375px;
`

export const Window = styled.div`
    width: 95%;
    background-color: black;
    border-radius: 10px;
    height: 95%;
    overflow: scroll;

    @media screen and (max-width: 765px){
        width: 100%;
        height: 100%;
    }
`