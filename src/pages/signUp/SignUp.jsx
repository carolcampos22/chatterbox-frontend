import React, { useState } from 'react'
import { Button, InputsSignUpContainer, LeftSide, LoginButton, RightSide, SignUpContainer } from './StylesSignUp'
import { useForm } from '../../hooks/useForm'
import logo from '../../assets/chat.png'
import image from '../../assets/people-chattering.png'
import { goToLoginPage, goToPostsPage } from '../../router/coordinator'
import { SignUpUser, validateEmail, validateName, validatePassword } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [form, onChangeInputs, clearInputs] = useForm({
    nickname: "",
    email: "",
    password: ""
  })

  const [isNameValid, setIsNamedValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)


  const onSubmit = async (event) => {
    event.preventDefault()
    clearInputs()
    setIsNamedValid(validateName(form.nickname))
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))


    try {
      setIsLoading(true);

      const { token } = isNameValid && isEmailValid && isPasswordValid && await SignUpUser({
        nickname: form.nickname,
        email: form.email,
        password: form.password
      })
      localStorage.setItem("login-chatterbox.token", token)
      setIsLoading(false)
      goToPostsPage(navigate)

    } catch (error) {
      console.log(error);
      alert(error.response.data[0].message)
    }
  }


  return (
    <SignUpContainer>


      <LeftSide>
      <img src={logo} alt='Logo da Chatterbox Tech' />
        <InputsSignUpContainer>
          <input
            type="text"
            name='nickname'
            value={form.nickname}
            onChange={onChangeInputs}
            placeholder='Apelido'
            required
          />
          <input
            type="email"
            name='email'
            value={form.email}
            onChange={onChangeInputs}
            placeholder='E-mail'
            required
          />
          <input
            type="password"
            name='password'
            placeholder='Senha'
            value={form.password}
            onChange={onChangeInputs}
            required />
        </InputsSignUpContainer>
        <Button onClick={onSubmit}>{isLoading ? "Carregando..." : "Cadastrar"}</Button>
        <LoginButton onClick={() => goToLoginPage(navigate)}>Já tem uma conta? Faça login!</LoginButton>
      </LeftSide>

      <RightSide>
        <img src={image} alt='Logo da Chatterbox Tech' />
        <h1>Boas vindas ao Chatterbox Tech ;)</h1>
      </RightSide>


    </SignUpContainer>
  )
}

export default SignUp


