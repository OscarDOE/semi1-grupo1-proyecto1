import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { PhotoCamera } from '@mui/icons-material';

const Fotoox = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleRegister = () => {
    // Aquí puedes agregar la lógica de registro, como hacer una solicitud a tu API.
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
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
            label="Correo Electrónico"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Contraseña"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Nombre de Usuario"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <DatePicker
            label="Fecha de Nacimiento"
            fullWidth
            margin="normal"
            value={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            renderInput={(params) => <TextField {...params} />}
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="profile-image-input"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="profile-image-input">
            <Button
              variant="outlined"
              color="default"
              component="span"
              startIcon={<PhotoCamera />}
              style={{ marginTop: '10px' }}
            >
              Subir Foto de Perfil
            </Button>
          </label>
          {profileImage && <Typography>Imagen seleccionada: {profileImage.name}</Typography>}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRegister}
            style={{ marginTop: '10px' }}
          >
            Registrarse
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Fotoox;
