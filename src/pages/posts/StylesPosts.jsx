import styled from "styled-components";

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 60vw;

    textarea{
        resize: none;
        width: 55vw;
        height: 15vh;
        background-color: #EDEDED;
        padding: 1rem;
        border: none;
        border-radius: 12px;     
        
    }
`

export const PostingArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5vw;
    margin-top: 2vh;
`

export const ButtonPost = styled.button`
   width:  15vw;
   height: 15vh;
   border: none;
   border-radius: 12px;
   color: #fff;
   background-color: var(--ocean-color);
   font-size: 2rem;
   font-weight: bold;

   &:hover{
    cursor: pointer;
    opacity: .8;
   }

`