import { Router } from "express";
import { createTable, insertCardapio, UpdateCardapio, selectCardapios, selectPratos, deletePratos, checkAccessKey} from './controlers/cardapio.js'; // IMPORTANDO O CREATE TABLE

const routes = Router();

routes.get('/', (req , res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

routes.post('/cardapio', checkAccessKey ,insertCardapio)
routes.put('/cardapio', checkAccessKey,  UpdateCardapio)
routes.get('/cardapios?', selectCardapios)
routes.get('/cardapio', selectPratos)
routes.delete('/cardapio', checkAccessKey, deletePratos)

export default routes