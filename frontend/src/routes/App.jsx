import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login"
import Fotoox from "../pages/Foto";
import AgregarCanciones from "../pages/AgregarCanciones";
import Profile from "../pages/Profile";
import MainPage from "../pages/MainPage";
import Historico from "../pages/Historico";
import AgregarArtista from "../pages/AgregarArtista";
export const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/foto" element={<Fotoox />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/history" element={<Historico />} />
            <Route path="/addCanciones" element={<AgregarCanciones />} />
            <Route path="/addArtista" element={<AgregarArtista />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admincrud" element={<Fotoox />} />

            {/* <Route path="/reportes" element={<Reportes />} /> */}
                   {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/vuelos" element={<PagesVuelos />} />
            <Route path="/admin" element={<PagesAdmin/>}></Route> */}
            </Routes> 
        </Layout>
    </BrowserRouter>
  );
};