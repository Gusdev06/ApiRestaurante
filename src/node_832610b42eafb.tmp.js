import  express  from 'express'; // importanto o express 
import cors from 'cors';
import routes from './routes.js'

import 'dotenv/config'


const app = express() // instaciando o app 
const PORT = process.env.PORT || 3001

console.log(`${process.env.HELLO}`)


app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use(routes) 


app.listen(PORT, () =>console.log(`Api initialized or port ${PORT}`)) // definindo a porta 

