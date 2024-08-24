import React, { useState } from 'react'
import logo from '../../assets/chat.png'
import './StylesLogin.jsx'
import { Button, ContainerLogin, CreateAccountButton, InputsLogin, Logo } from './StylesLogin.jsx'
import { useNavigate } from 'react-router-dom'
import { goToPostsPage, goToSignUpPage } from '../../router/coordinator'
import { useForm } from "../../hooks/useForm"
import { validateEmail, validatePassword } from '../../constants/constants'
import { LoginUser } from '../../constants/constants'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/user/actions.js'

export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: ""
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    clearInputs();
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));

    if (isEmailValid && isPasswordValid) {

      setIsLoading(true);

      try {
        const { token } = await LoginUser({
          email: form.email,
          password: form.password
        });

        localStorage.setItem("login-labeddit.token", token);

        dispatch(loginUser({email: form.email, token}))

        setIsLoading(false);
        goToPostsPage(navigate);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error)
        setIsLoading(false);
        // alert(error.response.data);
      }
    }
  };

  return (
    <ContainerLogin>
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>Chatterbox Tech</h1>
        <h2>A sua rede social de tecnologia!</h2>
      </Logo>
      <InputsLogin>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            value={form.email}
            name="email"
            onChange={onChangeInputs}
            title="Insira um e-mail válido"
            placeholder="E-mail"
            required
          ></input>
          <br />
          <input
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={onChangeInputs}
            minLength={6}
            required
          ></input>

          <div>
            <Button type="submit" onClick={onSubmit}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </Button>
            <CreateAccountButton onClick={() => goToSignUpPage(navigate)}>
              Criar uma conta!
            </CreateAccountButton>
          </div>
          
        </form>
      </InputsLogin>

    </ContainerLogin>
  );
};

export default Login;
