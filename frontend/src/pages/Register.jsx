import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {


    
    //EL NAVIGATE NOS MANDA A LA VENTANA QUE NECESITAMOS DESPUES QUE SE LE DE CLICK AL BOTON DE REGISTRAR
    const handleNavigate = () => {
        navigate("/login");
    };

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const ruta_AWS = 'http://localhost:5000/'

    // CREAMOS LAS VARIABLES DEPENDIENDO QUE INFORMACION TENEMOS QUE MANEJAR
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [confPass, setConfPass] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // CREAMOS UN OBJETO DE LA INFO QUE VAMOS A MANDAR AL BACK
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confPass: "",
        date: "",
        url: "TETET",
        rol:1
    })


    // CON ESTA FUNCION MANDAMOS LA INFO AL BACK
    const handleRegister = async (e) => {
        console.log("USER",user)
        // e.preventDefault()
        console.log(user.name)
        console.log(user.lastname)
        console.log("GILE",user.url)
        // CREAMOS UN FORMDATA Y LO LLENAMOS DE LA INFO QUE LLENO EL USUARIO CON EL OBJETO QUE CREAMOS AL INICIO
        const formData = new FormData();
        console.log(user.name)
        formData.append("name", user.name);
        console.log("FFFFFFFF")
        console.log(formData)
        formData.append("lastname", user.lastname);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("date", user.date);
        formData.append("url", user.url);
        formData.append("rol", 1);
        console.log("FORMDATA",formData.keys)

        

        // ENDPOINT QUE VAMOS A EJECUTAR PA MANDAR EL FORMDATA CON LA INFO
        const endpoint = await fetch(ruta_AWS+'user/register', {
            method: "POST",
            body: formData
        });
        try{

            if (endpoint.ok) {
                // El archivo se ha cargado correctamente
                console.log('Archivo subido con éxito');
              } else {
                // Manejar errores
                console.error('Error al cargar el archivo');
              }
        } catch (error) {
        console.error('Error de red:', error);
        }
        

        // SE VERIFICA SI TODO SALIO BIEN ENTONCES SE PROCEDE O SE MUESTRA ERROR, DEPENDIENDO
        const resp = await endpoint.json();
        console.log(formData)
        if (endpoint.status === 400 || endpoint.status === 500 || endpoint.status === 404){
            console.log("ERROR")
            setError(resp.message);
        }
        else{ 
            setError(null);
            alert("¡Registrado correctamente!")
            handleNavigate()
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Registro de Usuario
                </Typography>
                <form>
                    <TextField
                        label="Nombre"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                    <TextField
                        label="Apellido"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                    />
                    <TextField
                        label="Correo Electrónico"
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
                    <TextField
                        type="password"
                        label="Confirmar Contraseña"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setUser({ ...user, confPass: e.target.value })}
                    />

                    <div>
                        <label>Fecha de nacimiento</label>
                    </div>
                    <div>
                        <input
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                            onChange={(e) => setUser({ ...user, date: e.target.value })} type="date" ></input>
                    </div>
                    <div>
                        <label>Foto perfil</label>
                    </div>
                    <div>
                        <input
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                            onChange={(e) => setUser({ ...user, url: e.target.files[0] })} type="file" name="f_Perfil" id="fo_Perfil"></input>
                    </div>


                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleRegister}
                    >
                        Registrarse
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Register;
