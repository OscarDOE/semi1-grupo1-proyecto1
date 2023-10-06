import express from 'express';
import cors from 'cors';
import UserRoutes from './routes/UserRoutes';
import { port } from './constants';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
