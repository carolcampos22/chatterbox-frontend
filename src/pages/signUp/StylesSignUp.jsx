import styled from "styled-components";

export const SignUpContainer = styled.div`

    h1{
        margin-top: 5vh;
        margin-left: 8vw;
        color: #373737;

        @media (max-width: 3000px) {
        margin-top: 8vh;
        margin-left: 27vw;
        margin-bottom: -2vh;
        width: 50vw;

    }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
      width: 22vw;
      margin-bottom: -7vh;
    }

    @media (max-width: 3000px) {
        width: 30vw;
        margin-left: 35vw;

    }
    
`

export const InputsSignUpContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  input {
    width: 80vw;
    height: 6vh;
    border: 2px solid var(--connection-line-color); 
    padding-left: 3vw;
    border-radius: 10px;
    color: black;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin: 0.3vh;

    &:focus {
      border-color: var(--continent-color); 
      box-shadow: 0 0 20px var(--continent-color);
      outline: none;
    }

    @media (max-width: 3000px) {
      width: 30vw;
    }
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;

export const InputsSignUp = styled.div`
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
`;

export const Texts = styled.div`
  margin-top: 10vh;
  margin-left: 1rem;

  a {
    text-decoration: none;
    color: var(--ocean-color); /* Azul metalizado */
    transition: color 0.3s;

    &:hover {
      color: var(--continent-color); /* Verde metálico */
    }
  }
`;

export const Button = styled.button`
  width: 80vw;
  height: 5vh;
  border: none;
  border-radius: 27px;
  margin-top: 2vh;
  margin-bottom: 2vh;
  color: #fff;
  background-color: var(--continent-color); /* Verde metálico */
  font-size: 2vh;
  font-weight: bold;
  box-shadow: 0 0 10px var(--continent-color); /* Adiciona um leve brilho ao botão */
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--ocean-color); /* Azul metalizado */
    box-shadow: 0 0 15px var(--ocean-color); /* Realça o brilho ao passar o mouse */
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;

export const LoginButton = styled.button`
  width: 80vw;
  height: 5vh;
  border: 2px solid var(--ocean-color); /* Azul metalizado */
  border-radius: 27px;
  margin-bottom: 3vh;
  color: var(--ocean-color); /* Azul metalizado */
  background-color: transparent;
  font-size: 2vh;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--ocean-color); /* Azul metalizado */
    color: var(--connection-line-color); /* Prata */
    box-shadow: 0 0 15px var(--ocean-color); /* Adiciona brilho ao hover */
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;
