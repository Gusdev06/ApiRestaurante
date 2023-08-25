import  express  from 'express'; // importanto o express 
const app = express() // instaciando o app 

import fs from 'fs';
import https from 'https';
import cors from 'cors';

import routes from './routes.js'

app.use(express.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type'
}));

app.use(routes)


app.listen(3000, () =>console.log('Api initialized')) // definindo a porta 

