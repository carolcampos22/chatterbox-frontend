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
    gap: 1vw;
    margin-top: 2vh;
`

export const LikesDislikes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 8vw;
    border: 2px solid lightgray;
    border-radius: 40px;
    margin-top: 1vh;
    padding: .4rem;
`

export const Comments = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7vw;
    border: 2px solid lightgray;
    border-radius: 40px;
    margin-top: 1vh;
    padding: .4rem;
`