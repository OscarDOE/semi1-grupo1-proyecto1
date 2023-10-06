import { QueryTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {

  static RegistrarUsuario = async function (
    nombre: string,
    apellido: string,
    contrasena: string,
    // url: string,
    correo: string,
    fecha: string,
    rol: number
  ) {
    const result = await sequelize.query('CALL RegistrarUsuario(:nombre, :apellido, :contrasena,\' FFFF\', :correo, :fecha, :rol)', {
      replacements: { nombre, apellido, contrasena, correo, fecha, rol },
      type: QueryTypes.RAW,
    });

    return result[0];
  };

  static IniciarSesion = async function (correo: string, contrasena: string)  {
    console.log("INiciar serSION")
    const result = await sequelize.query('CALL IniciarSesion(:correo, :contrasena)', {
      replacements: { correo, contrasena },
      type: QueryTypes.RAW,
    });
    return result;
  };

  static EditarPerfil = async function (id: number, nuevoNombre: string, nuevoApellido: string, url: string, correo: string) {
    const result = await sequelize.query('CALL EditarPerfil(:id, :nuevoNombre, :nuevoApellido, :url, :correo)', {
      replacements: { id, nuevoNombre, nuevoApellido, url, correo },
      type: QueryTypes.RAW,
    });
    return result[0];
  };

  static ObtenerUsuarios = async function () {
    const result = await sequelize.query('CALL VerUsuarios()', {
      type: QueryTypes.RAW
    });
    return result;
  }
}

/*async function main() {
  try {
    const usuarios = await User.IniciarSesion('correo@gmail.com','12345');
    console.log(JSON.stringify(usuarios));
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
*/
export default User;
