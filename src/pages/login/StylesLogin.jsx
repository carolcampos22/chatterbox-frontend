import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1vh;
   
    @media (max-width: 3000px) {
        width: 30vw;
        margin-left: 33vw;

    }
    
`

export const Logo = styled.div`
    margin-bottom: 8vh;
    img {
      width: 22vw;
    }

    h1 {
      font-size: 3rem;
      color: var(--ocean-color)
    }
    h2 {
      color: gray;
    }
`

export const InputsLogin = styled.div`
  margin-bottom: 4vh;
  margin-top: -3vh;
  display: flex;
  flex-direction: column;

  div {
      margin-top: 5vh;
    }
 
  
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
  margin-bottom: 2vh;
  margin-top: -3vh;
  color: #fff;
  background-color: var(--continent-color);
  font-size: 2vh;
  font-weight: bold;
  box-shadow: 0 0 10px var(--continent-color);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--ocean-color); 
    box-shadow: 0 0 15px var(--ocean-color); 
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;

export const CreateAccountButton = styled.button`
  width: 80vw;
  height: 5vh;
  border: 2px solid var(--ocean-color); 
  border-radius: 27px;
  margin-bottom: 3vh;
  color: var(--ocean-color); 
  background-color: transparent;
  font-size: 2vh;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--ocean-color); 
    color: var(--connection-line-color);
    box-shadow: 0 0 15px var(--ocean-color); 
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;
