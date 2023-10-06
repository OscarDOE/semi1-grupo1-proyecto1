import React,{useContext,useState,useEffect} from 'react'
import Cookies from "universal-cookie"
import { Button, Grid, DataGrid } from "@mui/material";
import { TrendingUpOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
//import AppEnvr from '../enviroment/AppEnvr';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


const Perfil = () => {

    //const { logIn, getNombre } = useContext(AppEnvr)
    const ruta_AWS = 'http://ec2-54-226-103-240.compute-1.amazonaws.com'
    const cookies = new Cookies();
    const usuario_logeado = cookies.get('session');

    const [datosperfil, setDatosperfil] = useState([]);
    const [comision, setComision] = useState([]);


    // useEffect(() => {getDatosRepartidor()}, [] );
    // useEffect(() => {getComision()}, [] );

    // const getDatosRepartidor = async () =>{

    //   const endpoint = await fetch(ruta_AWS+'/miPerfil', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },body: JSON.stringify({"token":usuario_logeado})
    //   });
    //   const resp_get = await endpoint.json();
    //   setDatosperfil(resp_get[0])
    // }

    // const getComision= async () =>{

    //   const endpoint = await fetch(ruta_AWS+'/comision', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },body: JSON.stringify({"token":usuario_logeado})
    //   });
    //   const resp_get = await endpoint.json();
    //   setComision(resp_get[0].comisiones)
    // }
    

    const editar = (e) => {
        console.log(e)
        console.log("ENTRO A EDITAR")
        alert("")
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




    return (
        

      <Box sx={{ flexGrow: 1 }}> 
        <div>       
          {/* {usuario_logeado?.rol === "3" ?  */}
          <>   {/* parte inicial del ternario */} 

            <br></br>
            <Grid container justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} >
                <Item style={{backgroundColor:'black', color:'white'}}><h1><center>Bienvenido {datosperfil.nombres + " " + datosperfil.apellidos }</center></h1> </Item>
                </Grid>
            </Grid><br></br>
            <Grid container justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{backgroundColor:'black'}}>

                <Grid item xs={6} >
                    <Item style={{backgroundColor:'black', color:'white'}}>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIsN7J5Bk4aP2_kwQRa3sG7ecXZD439McFw&usqp=CAU" style={{borderRadius:'50%'}} alt="Descripción de la imagen"  />
                        <h3 style={{ marginBottom:'5px'}}>Nombres : {datosperfil.nombres}
                        <input 
                            type="text"
                            placeholder={datosperfil.nombres}
                        />
                        
                        </h3>
                        <h3 style={{ marginBottom:'5px'}}>Apellidos : {datosperfil.nombres}
                        <input 
                            type="text"
                            placeholder={datosperfil.apellidos}
                        />
                        
                        </h3>
                        <h3 style={{ marginBottom:'5px'}}>Correo Electrónico : {datosperfil.nombres}
                        <input 
                            type="text"
                            placeholder={datosperfil.correo}
                        />
                        
                        </h3>
                        <h3 style={{ marginBottom:'5px'}}>Fecha de Nacimiento : {datosperfil.nombres}
                        <input 
                            type="text"
                            placeholder={datosperfil.fecha_nacimiento}
                        />
                        </h3>
                    </Item>
                    <Item style={{backgroundColor:'black', color:'white'}}>
                    <Button style={{ backgroundColor: 'magenta', color: 'white', padding: '10px 20px', borderRadius: '5px' }} onClick={abrirVentanaEmergente} >
                        Editar Perfil
                    </Button>
                    </Item>
                </Grid>
                

                
                {/* <Grid item xs={3} >
                    <Item>
                        <h3 style={{ marginBottom:'5px'}}>Calificación </h3>
                        <h1>{datosperfil.calificacion}</h1>
                    </Item>
                    <br></br>
                    <Item>
                        <h3 style={{ marginBottom:'5px'}}>Comisiones </h3>
                        <h1>{comision}</h1>
                    </Item>
                </Grid> */}
            </Grid>

            {/* -------------- termina ternario ------------------- */}
            </>
            {/* :
            <>
             <center><h1>¡Cuidado! Aqui solo repartidores </h1></center>
            </>} */}

        </div>
        </Box>
    )
}


function abrirVentanaEmergente() {
    const textoIngresado = window.prompt("Por favor, ingresa una contraseña:", "");
  
    if (textoIngresado !== null) {
      // El usuario ingresó una contraseña y presionó "Aceptar"
      alert(`Contraseña ingresada: ${textoIngresado}`);
    } else {
      // El usuario presionó "Cancelar" o cerró la ventana emergente
      alert("No se ingresó ninguna contraseña.");
    }
  }


export default Perfil