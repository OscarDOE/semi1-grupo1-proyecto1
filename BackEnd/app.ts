import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import UserRoutes from './routes/UserRoutes';
import { port } from './constants';

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/user', UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
