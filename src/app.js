import  express  from 'express'; // importanto o express 
import cors from 'cors';
import routes from './routes.js'

import 'dotenv/config'


const app = express() // instaciando o app 
const PORT = process.env.PORT || 3001



app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use(routes) 

console.log('Oi diegue :D')


app.listen(PORT, () =>console.log(`Api initialized or port ${PORT}`)) // definindo a porta 

