import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1vh;
    width: 100vw;
    height: 100vh;
    margin: 0;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0B3D91, #7D3C98);
  width: 90vw;
  height: 100vh;
  color: #F8F9FA;

  img {
    width: 30vw;
    height: 80vh;
  }

  h1 {
    font-size: 3rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E0E0E0;
  width: 50vw;
  height: 100vh;
`;

export const Logo = styled.div`
  margin-bottom: 8vh;

  img {
    width: 22vw;
  }

  h1 {
    font-size: 3rem;
    color: #4682B4;
  }

  h2 {
    color: gray;
  }
`;

export const InputsLogin = styled.div`
  margin-bottom: 4vh;
  margin-top: -3vh;
  display: flex;
  flex-direction: column;

  h3 {
    color: #4682B4;
    font-size: 2rem;
    margin-bottom: 1vh;
  }

  div {
    margin-top: 5vh;
  }

  input {
    width: 80vw;
    height: 6vh;
    border: 2px solid #C0C0C0;
    padding-left: 3vw;
    border-radius: 10px;
    color: black;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin: 0.3vh;

    &:focus {
      border-color: #7D3C98;
      box-shadow: 0 0 20px #7D3C98;
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
  background: linear-gradient(135deg, #4682B4, #7D3C98);
  font-size: 2vh;
  font-weight: bold;
  box-shadow: 0 0 10px #4682B4;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background: linear-gradient(135deg, #7D3C98, #4682B4);
    box-shadow: 0 0 15px #7D3C98;
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;

export const CreateAccountButton = styled.button`
  width: 80vw;
  height: 5vh;
  border: 2px solid #4682B4;
  border-radius: 27px;
  margin-bottom: 3vh;
  color: #4682B4;
  background-color: transparent;
  font-size: 2vh;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #4682B4;
    color: #E0E0E0;
    box-shadow: 0 0 15px #4682B4;
  }

  @media (max-width: 3000px) {
    width: 30vw;
  }
`;
