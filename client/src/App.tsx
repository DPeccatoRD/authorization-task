import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

const App: FC = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'login/'}>Sign In</NavLink>
                <NavLink to={'signup/'}>Sign Up</NavLink>
            </div>
            <Routes>
                <Route path={'/'} element={<HomePage/>} />
                <Route path={'login/*'} element={<SignInPage/>} />
                <Route path={'signup/*'} element={<SignUpPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default observer(App);
