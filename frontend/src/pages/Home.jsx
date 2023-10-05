import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();


  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Soundstream
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Bienvenido a la pagina No.1 de musica en streaming
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
                navigate("/login");
            }}
          >
            Iniciar Sesión
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
                navigate("/register");
            }}
          >
            Registrarse
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
