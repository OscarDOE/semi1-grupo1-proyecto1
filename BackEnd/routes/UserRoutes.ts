import express  from 'express';
import UserController from '../controllers/UserController';
import authenticateToken from '../middleware/authenticateToken'; 

const UserRoutes = express.Router();

//
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

aws.config.update({
  secretAccessKey: 'AKIA5AQSSJ7MHYABWLE4',
  accessKeyId: 'uBH1D1y2tEDWxysqFTe0WdmuCXd3G05P10vWNRli',
  region: 'us-east-2', // Cambia esto a la región de tu bucket
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'arn:aws:s3:::multimedia-semi1-g1',
    acl: 'public-read', // Puedes ajustar los permisos
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

//

UserRoutes.post('/login',   UserController.login);
UserRoutes.post('/register', upload.single('imagen'), UserController.registerUser);
UserRoutes.post('/updateuser',authenticateToken, UserController.updateUser);
UserRoutes.get('/getusers', UserController.getAllUsers);

export default UserRoutes; 
