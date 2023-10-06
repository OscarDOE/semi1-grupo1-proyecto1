import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import UserRoutes from './routes/UserRoutes';
import logRequest from './utils/logRequest';
import { port } from './constants';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logRequest);

app.use('/user', UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
