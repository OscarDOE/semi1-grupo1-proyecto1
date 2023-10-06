import express from 'express';
import UserController from '../controllers/UserController';
import authenticateToken from '../middleware/authenticateToken'; 

const UserRoutes = express.Router();

UserRoutes.post('/login',   UserController.login);
UserRoutes.post('/register',  UserController.registerUser);
UserRoutes.post('/updateuser',authenticateToken, UserController.updateUser);
UserRoutes.get('/getusers', UserController.getAllUsers);

export default UserRoutes; 
