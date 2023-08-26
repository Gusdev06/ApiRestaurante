import { Router } from "express";
import { createTable, insertCardapio, UpdateCardapio, selectCardapios, selectPratos, deletePratos, checkAccessKey} from './controlers/cardapio.js'; // IMPORTANDO O CREATE TABLE

const routes = Router();

routes.get('/', (req , res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

routes.post('/cardapios', insertCardapio)
routes.put('/cardapios', UpdateCardapio)
routes.get('/cardapios', checkAccessKey, selectCardapios)
routes.get('/cardapio', selectPratos)
routes.delete('/cardapio', deletePratos)

export default routes