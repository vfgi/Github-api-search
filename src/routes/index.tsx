import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home";
import Profile from "../pages/profile";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:name" element={<Profile />} />
        </Routes>
    )
}
