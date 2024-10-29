import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const Test02 = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Test02;
