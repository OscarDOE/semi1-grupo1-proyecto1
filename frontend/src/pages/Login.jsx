import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import sLogin from "../styles/sLogin.css"

const Login = () => {

    const cookies = new Cookies();
    const handleNavigate = () => {
        navigate("/");
    };

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const ruta_AWS = ''


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [user, setUser] = useState({
        email: "",
        password: ""
    })

  const handleLogin = async (e) => {
    e.preventDefault()

        // CREAMOS UN FORMDATA Y LO LLENAMOS DE LA INFO QUE LLENO EL USUARIO CON EL OBJETO QUE CREAMOS AL INICIO
        const formData = new FormData();
        formData.append("email",user.email);
        formData.append("password",user.password);

        // ENDPOINT QUE VAMOS A EJECUTAR PA MANDAR EL FORMDATA CON LA INFO
        const endpoint = await fetch(ruta_AWS+'/', {
            method: "POST",
            body:formData
        });

        // SE VERIFICA SI TODO SALIO BIEN ENTONCES SE PROCEDE O SE MUESTRA ERROR, DEPENDIENDO
        const resp = await endpoint.json();
        if (endpoint.status === 400 || endpoint.status === 500 || endpoint.status === 404){
            setError(resp.message);
        }
        else{ 
            setError(null);
            cookies.set("session", resp);
            alert("¡Bienvenido de nuevo!")
            handleNavigate()
        }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        <form>
          <TextField
            label="Usuario"
            fullWidth
            margin="normal"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            type="password"
            label="Contraseña"
            fullWidth
            margin="normal"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Iniciar sesión
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
