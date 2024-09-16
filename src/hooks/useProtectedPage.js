import {useEffect} from 'react'
import { goToLoginPage } from '../router/coordinator'


export const useProtectedPage = (navigate) => {
    useEffect(() => {
        const token = localStorage.getItem("login-chatterbox.token")
        if(!token){
            goToLoginPage(navigate)
        }
    }, [navigate])
}