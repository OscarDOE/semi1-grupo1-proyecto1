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

const AgregarCanciones = () => {


    const [nombre, setNombre] = useState("");
    const [duracion, setDuracion] = useState("");
    const [artista, setArtista] = useState("");

    const [song, setSong] = useState({
        nombre: "",
        duracion: "",
        artista: "",
        foto: null,
        archivo: null
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para enviar los datos a tu servidor o realizar alguna otra acción.
        

        
    };

    return (
        <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <h2>Cancion</h2>
            <form onSubmit={handleSubmit}>
                
                <TextField
                    label="Nombre"
                    variant="outlined"
                    value={nombre}
                    onChange={(e) => setSong({ ...song, nombre: e.target.value })}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Duración"
                    variant="outlined"
                    value={duracion}
                    onChange={(e) => setSong({ ...song, duracion: e.target.value })}
                    margin="normal"
                    fullWidth
                    required
                />
                <TextField
                    label="Artista"
                    variant="outlined"
                    value={artista}
                    onChange={(e) => setSong({ ...song, artista: e.target.value })}
                    margin="normal"
                    fullWidth
                    required
                />
                <div>
                    <label>Foto</label>
                </div>
                <div>
                    <input
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        onChange={(e) => setSong({ ...song, foto: e.target.files[0] })} type="file"></input>
                </div>

                <div>
                    <label>Archivo mp3</label>
                </div>
                <div>
                    <input
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                        onChange={(e) => setSong({ ...song, archivo: e.target.files[0] })} type="file"></input>
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

export default AgregarCanciones;
