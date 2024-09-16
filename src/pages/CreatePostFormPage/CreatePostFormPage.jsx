import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { AddPost } from "../../constants/constants"
import Header from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import { CreatePostFormPageContainer, FormContainer } from "./styledCreatePostFormPage"

export const CreatePostFormPage = () => {
    const [form, onChangeInputs, clearInputs] = useForm({
        title: "",
        content: "",
    })

    const navigate = useNavigate()
    useProtectedPage(navigate)

    const onSubmit = async (event) => {
        event.preventDefault()
        clearInputs()


        try {
            const { token } = await AddPost({
                title: form.title,
                content: form.content,

            })
            localStorage.getItem("login-chatterbox.token", token)
            alert("Post enviado!")
            console.log("TOKEN: ", token)

        } catch (error) {
            alert(error.response.data);
            console.log(error)
        }
    }
    return (
        <CreatePostFormPageContainer>
            <Header />
            <Navbar />
            <h1>Crie seu post!</h1>
            <FormContainer>
                <input
                    name="title"
                    value={form.title}
                    onChange={onChangeInputs}
                    placeholder="Escreva um título para o seu post..."
                />
                <textarea
                    name='content'
                    value={form.content}
                    onChange={onChangeInputs}
                    placeholder='Escreva seu post...'
                ></textarea>
                <button type='submit' onClick={onSubmit}>Enviar</button>
            </FormContainer>

        </CreatePostFormPageContainer>
    )
}