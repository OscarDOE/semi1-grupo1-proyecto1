import User from '../models/User';
import { hash } from 'bcrypt';

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
    const hashedPassword = await hash(password, 10);
    const newUser = await User.RegistrarUsuario(name, lastname, hashedPassword, url, email, date, rol);
    return newUser;
  }

  static async getAll(): Promise<unknown[]> {
    return User.ObtenerUsuarios();
  }

  static async login(email: string, password: string): Promise<{message: string, rol :number}> {
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
