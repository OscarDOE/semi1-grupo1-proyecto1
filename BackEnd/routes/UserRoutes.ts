import express from 'express';
import UserController from '../controllers/UserController';
import authenticateToken from '../middleware/authenticateToken'; 

const UserRoutes = express.Router();

UserRoutes.post('/login', authenticateToken,  UserController.login);
UserRoutes.post('/register', authenticateToken, UserController.registerUser);
UserRoutes.get('/updateuser',authenticateToken, UserController.updateUser);
UserRoutes.get('/getuserrs',authenticateToken, UserController.getAllUsers);

export default UserRoutes; 
