import React, { useContext, useState } from 'react'
import '../styles/sHeader.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Header = () => {



    const cookies = new Cookies();
    const usuario_logeado = cookies.get('session');
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate("/");
        cookies.remove('session')
    };
    //console.log(usuario_logeado)

    return (

        <header>
            <Box sx={{ flexGrow: 1 }}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {usuario_logeado?.rol === "1" ? <Link to='/homeadmin'>SoundStream</Link> : ""}
                            {usuario_logeado?.rol === "2" ? <Link to='/'>SoundStream</Link> : ""}
                            {usuario_logeado?.rol === "3" ? <Link to='/perfilrepartidor'>SoundStream</Link> : ""}
                            {usuario_logeado?.rol === "4" ? <Link to='/panelempresa'>SoundStream</Link> : ""}
                            {usuario_logeado ? "" : <Link to='/'>SoundStream</Link> }
                            </Typography>
                            

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {usuario_logeado?.rol === "1" ? 
                                <>
                                <Link to='/homepage'><Button color="inherit">Inicio</Button></Link>
                                <Link ><Button color="inherit">Buscar</Button></Link>
                                <Link to='/perfil'><Button color="inherit">Perfil</Button></Link>
                                <Link to='/informeusers'><Button color="inherit">Playlist</Button></Link>
                                <Link to='/favoritos'><Button color="inherit">Favoritos</Button></Link>
                                <Link to='/historico'><Button color="inherit">Histórico</Button></Link>
                                <Link ><Button color="inherit">Radio</Button></Link>
                                <Link to='/admincrud'><Button color="inherit">Administrador</Button></Link>
                                </> 
                                : 
                                <></>}
                                {usuario_logeado?.rol === "2" ? 
                                <>
                                <Link to='/homepage'><Button color="inherit">Inicio</Button></Link>
                                <Link ><Button color="inherit">Buscar</Button></Link>
                                <Link to='/perfil'><Button color="inherit">Perfil</Button></Link>
                                <Link to='/informeusers'><Button color="inherit">Playlist</Button></Link>
                                <Link to='/favoritos'><Button color="inherit">Favoritos</Button></Link>
                                <Link to='/historico'><Button color="inherit">Histórico</Button></Link>
                                <Link ><Button color="inherit">Radio</Button></Link>
                                </> 
                                : 
                                <></>}
                                {usuario_logeado?.rol === "3" ? 
                                <>
                                <Link to='/perfilrepartidor'><Button color="inherit">Mi perfil</Button></Link>
                                </> 
                                : 
                                <></>}
                                {usuario_logeado?.rol === "4" ? 
                                <>
                                <Link to='/panelempresa'><Button color="inherit">Panel de control</Button></Link>
                                </> 
                                : 
                                <></>}
                            </Typography>

                            {usuario_logeado ? 
                            <><Button onClick={handleLogOut} color="inherit">Log out</Button></> 
                            : 
                            <>
                            {/* <Link to='/loginadmin'><Button color="inherit">Admin</Button></Link> */}
                            <Link to='/login'><Button color="inherit">Login</Button></Link>
                            <Link to='/register'><Button color="inherit">Registro</Button></Link>
                            </>}


                        
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </header>
    )
}




export default Header