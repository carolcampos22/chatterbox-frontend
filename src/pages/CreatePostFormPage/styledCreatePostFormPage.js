import styled from "styled-components";

export const CreatePostFormPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
`;

export const FormContainer = styled.form`
    background-color: var(--ocean-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    width: 70vw;

    input, textarea {
        width: 100%;
        margin-bottom: 1.5rem;
        padding: 1rem;
        border: 2px solid var(--continent-color);
        border-radius: 8px;
        font-size: 1.4rem;
        color: var(--ocean-color); 
        background-color: #f7f7f7;
        resize: none;
    }

    textarea {
        height: 32vh;
    }

    input::placeholder, textarea::placeholder {
        color: var(--dialog-bubble-color); /* Cinza metálico */
    }

    input:focus, textarea:focus {
        outline: none;
        border-color: var(--connection-line-color); /* Prata */
        box-shadow: 0 0 5px var(--connection-line-color);
    }

    button {
        background-color: var(--continent-color); /* Verde metálico */
        width: 50%;
        align-self: center;
        color: white;
        padding: 1rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: darken(var(--continent-color), 10%);
        }
    }
`;



// import styled from "styled-components";

// export const CreatePostFormPageContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `

// export const FormContainer = styled.form`
//     background-color: pink;
//     display: flex;
//     flex-direction: column;
// `