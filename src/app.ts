import express from 'express';
import incidentRoutes from './routes/incidentRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());


app.use('/api/v1/incidents', incidentRoutes);
app.use('/api/v1/auth', authRoutes);

export default app;
