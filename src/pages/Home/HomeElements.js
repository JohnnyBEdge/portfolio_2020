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
    /* max-width: 1024px; */
    background-color: black;
    border-radius: 5px;
    height: 95%;

    @media screen and (max-width: 765px){
        width: 100%;
        height: 100%;
    }
`