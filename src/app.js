import  express  from 'express'; // importanto o express 
const app = express() // instaciando o app 
import cors from 'cors';
import routes from './routes.js'

app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.use(routes) 


app.listen(3000, () =>console.log('Api initialized')) // definindo a porta 

