import styled from "styled-components";

export const ContainerCardPost = styled.div`
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid lightgray;
    margin-top: 2vh;
    width: 70vw;

    p {
        margin-top: 0; 
        text-align: left; 
        color: #686868;
    }

    h3{
        margin-top: 2vh;
    }
`

export const LikesDislikesCommentsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5vw;
    margin-top: 2vh;

    @media(max-width: 1150px){
        gap: 3vw;
    }

    @media(max-width: 950px){
        justify-content: space-around;
    }

    @media(max-width: 560px){
        justify-content: space-around;
    }
`

export const LikesDislikes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 8vw;
    border: 2px solid lightgray;
    border-radius: 40px;
    margin-top: 1vh;

    @media(max-width: 1560px){
        width: 10vw;
        gap: .5vw;
    }

    @media(max-width: 1150px){
        width: 12vw;
    }

    @media(max-width: 950px){
        width: 25vw;
    }

    @media(max-width: 560px){
        justify-content: space-around;
    }
`

export const Comments = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6vw;
    border: 2px solid lightgray;
    border-radius: 40px;
    margin-top: 1vh;
    margin-right: 2vw;
    padding: 0.3rem .5rem;

    
    @media(max-width: 1560px){
        width: 8vw;
    }

    @media(max-width: 1150px){
        width: 9vw;
        gap: .5vw;
    }

    @media(max-width: 950px){
        width: 16vw;
        padding-right: 0.8rem;
    }

    @media(max-width: 560px){
        justify-content: space-around;
        width: 20vw;
    }
`