import  express  from 'express'; // importanto o express 
const app = express() // instaciando o app 

import fs from 'fs';
import https from 'https';
import cors from 'cors';

import routes from './routes.js'

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use(routes)


app.listen(3000, () =>console.log('Api initialized')) // definindo a porta 

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3002, () =>console.log('Api rodando'))