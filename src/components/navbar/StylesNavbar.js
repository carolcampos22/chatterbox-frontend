import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 2vw;
  width: 100vw;
  background-color: var(--ocean-color); /* Usando a variável ocean-color para o fundo da navbar */
  
  h3 {
    color: var(--text-color); /* Usando a variável text-color para o título */
  }
  
  ul {
    display: flex;
    gap: 2vw;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    color: var(--dialog-bubble-color); /* Usando a variável dialog-bubble-color para os itens da lista */
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease; /* Suaviza a transição de cor e fundo */
  }

  ul li:hover {
    color: var(--continent-color); /* Usando a variável continent-color para o hover nos itens da lista */
    background-color: var(--primary-color); /* Adiciona fundo ao hover */
    padding: 0.5vh 1vw; /* Espaçamento adicional no hover */
    border-radius: 4px; /* Adiciona borda arredondada no hover */
  }
`;
