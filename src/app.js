import  express  from 'express'; // importanto o express 
const app = express() // instaciando o app 

app.use(express.json());

import routes from './routes.js'
app.use(routes)


app.listen(3000, () =>console.log('Api initialized')) // definindo a porta 