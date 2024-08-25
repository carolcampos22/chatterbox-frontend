import styled from "styled-components"

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vh 2vw;
    width: 100vw;
    background-color: var(--connection-line-color);

    ul {
        display: flex;
        gap: 2vw;
        list-style-type: none;
    }

    ul li:hover{
        cursor: pointer;
    }
`