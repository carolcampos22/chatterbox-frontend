import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10vh;
   
    @media (max-width: 3000px) {
        width: 30vw;
        margin-left: 33vw;

    }
    
`

export const Logo = styled.div`
    margin-bottom: 8vh;

    h2 {
        color: var(--ocean-color)
    }
`

export const InputsLogin = styled.div`
  margin-bottom: 5vh;
  display: flex;
  flex-direction: column;
  
  input {
    width: 80vw;
    height: 6vh;
    border: 2px solid var(--connection-line-color); 
    padding-left: 3vw;
    border-radius: 10px;
    color: black;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin: .3vh;
    
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



export const Button = styled.button`
  width: 80vw;
  height: 5vh;
  border: none;
  border-radius: 27px;
  margin-bottom: 3vh;
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

export const CreateAccountButton = styled.button`
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
