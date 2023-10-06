// controllers/UserController.js
import { jwtKey } from '../constants';
import UserService from '../services/UserService';
import jsonwebtoken from 'jsonwebtoken';

class UserController {
  static async registerUser(req, res) {
    const { name, lastname, password, url, email, date, rol } = req.body;
    try {
      const newUser = await UserService.newUser(name, lastname, password, url, email, date, rol);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error', message: error });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await UserService.login(username, password);
      if (result[0] && typeof result[0] === 'object' && 'message' in result[0]) {
        const message = result[0].message;
        if (message === "invalid") {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        if ('rol' in result[0]) {
          const token = jsonwebtoken.sign({ userId: result[0].message }, jwtKey, { expiresIn: '1h' });
          res.status(200).json({ token: token, rol: result[0].rol });
        }
      }
    } catch (e) {
      res.status(500).json({ message: "internal server error" });
    }

  }

  static async getAllUsers(req, res) {
    try {
      const user = await UserService.getAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateUser(req, res) {
    try {
      const { name, lastname, url, email } = req.body;
      const token = req.headers.authorization.split(' ')[1]; // Extract token from headers
      const decodedToken = jsonwebtoken.verify(token, jwtKey);
      const id_user = decodedToken.userId;
      const result = await UserService.updateUser(id_user, name, lastname, url, email);
      res.status(200).json(result)
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}
export default UserController;

