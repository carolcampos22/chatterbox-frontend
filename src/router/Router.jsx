import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Posts from "../pages/posts/Posts";
import Comments from "../pages/comments/Comments";
import { useState } from "react";
import Header from "../components/header/Header";
import { Navbar } from "../components/navbar/Navbar";

export const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter> 
            <Routes>
                <Route index element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="posts" element={<Posts />} />
                <Route path="comments/:id" element={<Comments />} />
            </Routes>
        </BrowserRouter>
    );
}
