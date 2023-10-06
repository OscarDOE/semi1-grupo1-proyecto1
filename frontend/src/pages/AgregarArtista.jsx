import React, { useState } from "react";
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    Input,
    IconButton,
    Paper,
    Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const AgregarArtista = () => {


    const [nombre, setNombre] = useState("");
    const [fecha, setDuracion] = useState("");



    const [artista, setArtista] = useState({
        nombre: "",
        foto: null,
        fecha: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para enviar los datos a tu servidor o realizar alguna otra acción.


    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <h2>Artista</h2>
                <form onSubmit={handleSubmit}>

                    <TextField
                        label="Nombre"
                        variant="outlined"
                        value={nombre}
                        onChange={(e) => setArtista({ ...artista, nombre: e.target.value })}
                        fullWidth
                        required
                        margin="normal"
                    />

                    <div>
                        <label>Fecha de nacimiento</label>
                    </div>
                    <div>
                        <input
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                            onChange={(e) => setArtista({ ...artista, fecha_nacimiento: e.target.value })} type="date" ></input>
                    </div>


                    <div>
                        <label>Foto</label>
                    </div>
                    <div>
                        <input
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                            onChange={(e) => setArtista({ ...artista, foto: e.target.files[0] })} type="file"></input>
                    </div>


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullCWidth
                        style={{ marginTop: "20px" }}
                    >
                        Crear cancion
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default AgregarArtista;
