import styled from "styled-components";

export const HeaderContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15vw;
    width: 100vw;
    height: 20vh;
    padding-right: 27vw;
    padding-top: 15vh;
    padding-bottom: 15vh;
    background-color: #2d2c2c;
    

    img{
        width: 15vw;

        /* @media (max-width: 750px){
            width: 10vw;
        }

        @media (min-width: 1200px){
            width: 7vw;
            margin-bottom: -7vh;
        } */
        
        
    }

    h1 {
    font-size: 4.5rem;
    color: #4682B4;
    
}

    p {
        color: #C0C0C0;
        text-align: center;
        font-size: 1.5rem;
    }

   

    a{
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        margin-top: 5vh;
        color: blue;        
    }

    a:hover{
        cursor: pointer;
    }
`

