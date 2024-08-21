import { useNavigate } from "react-router-dom"
import { NavbarContainer } from "./StylesNavbar"
import { goToLoginPage, goToPostsPage } from "../../router/coordinator"

export const Navbar = () => {
    const navigate = useNavigate()

    // const buttonAction = () => {
    //     if (isLoggedIn) {
    //         localStorage.removeItem("login-labeddit.token")
    //         setIsLoggedIn(false)

    //     }
    //     goToLoginPage(navigate)
    // }

    // const buttonText = isLoggedIn ? "Logout" : "Entrar"
    return (
        <NavbarContainer>
            <h3>Chatterbox Tech</h3>
            <ul>                
                <li onClick={() => goToPostsPage(navigate)}>Posts</li>
                <li>Entrar</li>
            </ul>
        </NavbarContainer>
    )
}