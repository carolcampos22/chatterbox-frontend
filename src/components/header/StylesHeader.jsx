import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15vw;
  width: 100vw;
  height: 15vh;
  padding-right: 27vw;
  padding-top: 10vh;
  padding-bottom: 15vh;
  background: linear-gradient(180deg, #4682b4, #2c3e50); 

  img {

    @media (max-width: 750px) {
      width: 10vw;
    }

    @media (min-width: 1200px) {
      width: 7vw;
      margin-bottom: -7vh;
    }
  }

  h1 {
    font-size: 4.5rem;
    color: #293c50;
    text-shadow: 2px 2px var(--warm-yellow-color); /* Destaque com Sombra Amarela */
  }

  p {
    color: var(--connection-line-color); /* Prata */
    text-align: center;
    font-size: 1.5rem;
  }

  a {
    color: var(--coral-pink-color); /* Rosa Coral */
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    margin-top: 5vh;
  }

  a:hover {
    color: var(--continent-color); /* Verde Metálico no Hover */
    cursor: pointer;
  }

  button {
    background-color: var(--continent-color); /* Fundo Verde Metálico */
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
  }

  button:hover {
    background-color: var(--warm-yellow-color); /* Hover Amarelo Quente */
    cursor: pointer;
  }
`;



