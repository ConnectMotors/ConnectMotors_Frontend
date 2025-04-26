import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Comprar from "../pages/Comprar/Comprar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Cadastro />} />
      <Route path="/comprar" element={<Comprar />} />
    </Routes>
  );
}

export default AppRoutes;

