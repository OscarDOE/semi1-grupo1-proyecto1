import User from '../models/User';
//import sha256Hash from '../utils/util'

class UserService {
  static async newUser(
    name: string,
    lastname: string,
    password: string,
    url: string,
    email: string,
    date: string,
    rol: number
  ): Promise<unknown[]> {
    //const hashedPassword = sha256Hash(password);
    const newUser = await User.RegistrarUsuario(name, lastname, password, url, email, date, rol);
    return newUser;
  }

  static async getAll(): Promise<unknown[]> {
    return User.ObtenerUsuarios();
  }

  static async login(email: string, password: string) {
    //const hashedPassword = sha256Hash(password);
    return User.IniciarSesion(email, password);
  }

  static async updateUser(
    id: number,
    name: string,
    lastname: string,
    url: string,
    email: string
  ): Promise<unknown[]> {
    const updateUser = await User.EditarPerfil(id, name, lastname, url, email);
    return updateUser;
  }
}

export default UserService;
