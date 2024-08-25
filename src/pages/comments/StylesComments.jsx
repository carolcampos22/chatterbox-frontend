import styled from "styled-components";

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    margin-top: 0;

    textarea{
        resize: none;
        width: 70vw;
        height: 15vh;
        background-color: #EDEDED;
        padding: 1rem;
        border: none;
        border-radius: 12px;
        margin-bottom: 1.5vh;
        margin-top: 2vh;
    }
`

export const Loading = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 3vh;
    color: #FF6489;
    margin-top: 40vh;
`

export const ButtonComment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  12vw;
    height: 10vh;
    padding: 0 1vw;
    margin-top: 1vh;
    border: none;
    border-radius: 12px;
    color: #fff;
    background-color: var(--ocean-color);
    font-size: 1.5rem;
    font-weight: bold;
    align-self: center;

    &:hover{
        cursor: pointer;
        opacity: .8;
        border: 5px solid var(--continent-color);
   }
`