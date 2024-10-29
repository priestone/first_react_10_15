import { useForm } from "react-hook-form";
import styled from "styled-components";
import Login from "./pages/Login";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const Ex08 = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Ex08;
