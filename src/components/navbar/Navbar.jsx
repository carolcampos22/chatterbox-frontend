import { useNavigate } from "react-router-dom"
import { NavbarContainer } from "./StylesNavbar"
import { goToLoginPage, goToPostsPage } from "../../router/coordinator"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../../redux/user/actions"

export const Navbar = () => {
    const navigate = useNavigate()

    const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)

    const dispatch = useDispatch()

    console.log({ currentUser })

    const handleLogoutClick = () => {
        dispatch(logoutUser())
        localStorage.removeItem("login-labeddit.token")
        goToLoginPage(navigate)
    }

    return (
        <NavbarContainer>
            <h3>Chatterbox Tech</h3>
            <ul>
                <li onClick={() => goToPostsPage(navigate)}>Posts</li>
                <li onClick={handleLogoutClick}>Sair</li>
            </ul>
        </NavbarContainer>
    )
}