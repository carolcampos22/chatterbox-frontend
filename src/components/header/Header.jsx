import React from 'react'
import Logo from '../../assets/chat.png'
import { HeaderContainer } from './StylesHeader'

const Header = () => {
  
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