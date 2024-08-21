import React from 'react'
import Logo from '../../assets/chat.png'
import { HeaderContainer } from './StylesHeader'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../../router/coordinator'

const Header = () => {
  // const navigate = useNavigate()

  // const buttonAction = () => {
  //   if(isLoggedIn){
  //     localStorage.removeItem("login-labeddit.token")
  //     setIsLoggedIn(false)

  //   }
  //   goToLoginPage(navigate)
  // }

  // const buttonText = isLoggedIn ? "Logout" : "Entrar"

  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo da Chatterbox Tech" />
      <div>
        <h1>Chatterbox Tech</h1>
        <p>A sua rede social de tecnologia!</p>
      </div>
    </HeaderContainer>
  )
}

export default Header