import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/',(req,res)=>{
    res.send('Welcome to Time Zone and Time Slot Management API')
})

export default app;
