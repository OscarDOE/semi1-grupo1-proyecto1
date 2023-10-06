import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Button, Grid, Box} from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  const gridStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    width: '100%', // Hacer que el Grid ocupe toda la pantalla en horizontal
  };
  
const MainPage = () => {

    const ruta_AWS = 'http://ec2-54-226-103-240.compute-1.amazonaws.com'
    const cookies = new Cookies();
    const usuario_logeado = cookies.get('session');

    const [datosperfil, setDatosperfil] = useState([]);

    const llamarcancion = (e) => {
        console.log(e)
        console.log("ENTRO A EDITAR")
        // const datosnuevos = fetch(`http://${process.env.REACT_APP_PUERTO}:5000/users/${e.id}`,{
        // const datosnuevos = fetch(`http://${process.env.REACT_APP_PUERTO}:5000/users/${e.id}`,{
        //     method:"DELETE",
        //     headers:{
        //         "Content-Type":"application/json"
        //     }            
        // }).then(res => res.json()
        // .then(res => {
        //     console.log("RESPUESTA DEL JSON PARA ELIMINAR ",res)
        // }))
    }

    return(
        <Box  mt={2} ml={3} mr={3}> 
            <br></br>
            <Grid container justifyContent="center">
                <Grid item xs={12} style={gridStyle}>
                    <h1 style={{ textAlign: 'center' }}>
                    Bienvenido {datosperfil.nombres + ' ' + datosperfil.apellidos}
                    </h1>
                    
                </Grid>
            </Grid>
            <Grid>
                <Grid container>
                    <h1 style={{color:'white'}}>Canciones Populares</h1>
                </Grid>
            </Grid>

            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Button onClick={(e) => llamarcancion(e)}>
                    <Grid item xs={12} style={gridStyle} mt={2} mb={4} ml={3} mr={3}>
                        <Item style={{ backgroundColor: '#4C4C4C' }} m={2}>
                            <img
                            style={{ backgroundColor: 'black', width: '300px', height: '200px'  }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIsN7J5Bk4aP2_kwQRa3sG7ecXZD439McFw&usqp=CAU"
                            alt="Descripción de la imagen"
                            />
                            <h1 style={{ color: 'white' }}> Pokemon 1</h1>
                            <h1 style={{ color: 'white' }}>Album : Pokemon</h1>
                            <h1 style={{ color: 'white' }}>Artista : ASH</h1>
                        </Item>
                    </Grid>
                </Button>
                {/* <Grid item xs={3} style={gridStyle} >
                    <Item style={{backgroundColor:'#4C4C4C'}}  m={2}>
                        <img style={{backgroundColor:'black'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIsN7J5Bk4aP2_kwQRa3sG7ecXZD439McFw&usqp=CAU" style={{width:'300px', height:'200px'}} alt="Descripción de la imagen"  />  
                        <h1 style={{color: 'white'}}> Pokemon 1</h1>
                        <h1 style={{color: 'white'}}>Album : Pokemon</h1>
                        <h1 style={{color: 'white'}}>Artista : ASH</h1>      
                    </Item>
                    
                    <Item style={{backgroundColor:'black'}}>
                    <Button style={{ backgroundColor: 'magenta', color: 'white', padding: '10px 20px', borderRadius: '5px' }}  >
                        Editar Perfil
                    </Button>
                    </Item>
                </Grid> */}
            </Grid>

            <Grid>
                <Grid container>
                    <h1 style={{color:'white'}}>Albumes</h1>
                </Grid>
            </Grid>
            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Button onClick={(e) => llamarcancion(e)}>
                    <Grid item xs={12} style={gridStyle} mt={2} mb={4} ml={3} mr={3}>
                        <Item style={{ backgroundColor: '#4C4C4C' }} m={2}>
                            <img
                            style={{ backgroundColor: 'black',  width: '300px', height: '200px'  }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIsN7J5Bk4aP2_kwQRa3sG7ecXZD439McFw&usqp=CAU"
                            alt="Descripción de la imagen"
                            />
                            <h1 style={{ color: 'white' }}> Pokemon 1</h1>
                            <h1 style={{ color: 'white' }}>Album : Pokemon</h1>
                            <h1 style={{ color: 'white' }}>Artista : ASH</h1>
                        </Item>
                    </Grid>
                </Button>
                {/*  */}
            </Grid>
            <Grid>
                <Grid container>
                    <h1 style={{color:'white'}}>Artistas más sonados</h1>
                </Grid>
            </Grid>
            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Button onClick={(e) => llamarcancion(e)}>
                    <Grid item xs={12} style={gridStyle} mt={2} mb={4} ml={3} mr={3}>
                        <Item style={{ backgroundColor: '#4C4C4C' }} m={2}>
                            <img
                            style={{ backgroundColor: 'black', width: '300px', height: '200px'  }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIsN7J5Bk4aP2_kwQRa3sG7ecXZD439McFw&usqp=CAU"
                            alt="Descripción de la imagen"
                            />
                            <h1 style={{ color: 'white' }}> Pokemon 1</h1>
                            <h1 style={{ color: 'white' }}>Album : Pokemon</h1>
                            <h1 style={{ color: 'white' }}>Artista : ASH</h1>
                        </Item>
                    </Grid>
                </Button>
                {/*  */}
            </Grid>
        </Box>
    )

}

export default MainPage;