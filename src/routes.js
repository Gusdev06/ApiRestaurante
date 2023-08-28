import { Router } from "express";
import { insertprato, Updateprato, selectprato, selectpratos, deletePratos,} from './controlers/pratos.js';
import { insertPorcoes, UpdatePorcoes, selectPorcoes, selectPorcaoFromId, deletePorcoes,} from './controlers/porcoes.js';
import { insertLanches, UpdateLanches, selectLanches, selectLanchesFromId, deleteLanches,} from './controlers/lanches.js';

import { checkAccessKey } from './key/key.js'

const routes = Router();

routes.get('/', (req , res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

// ---------- ROTA DE PRATOS 

routes.post('/newprato', checkAccessKey ,insertprato) // rota priv
routes.put('/attprato', checkAccessKey,  Updateprato) // rota priv
routes.delete('/delprato', checkAccessKey, deletePratos) // rota priv
routes.get('/pratoId', selectprato) 
routes.get('/pratos', selectpratos)

// --------- ROTA DE PORCOES

routes.post('/newporcao', checkAccessKey ,insertPorcoes) // rota priv
routes.put('/attporcao', checkAccessKey,  UpdatePorcoes) // rota priv
routes.delete('/delporcao', checkAccessKey, deletePorcoes) // rota priv
routes.get('/porcaoId', selectPorcaoFromId) 
routes.get('/porcoes', selectPorcoes)

// ---------- ROTA DE LANCHES

routes.post('/newlanche', checkAccessKey ,insertLanches) // rota priv
routes.put('/attlanche', checkAccessKey,  UpdateLanches) // rota priv
routes.delete('/dellanche', checkAccessKey, deleteLanches) // rota priv
routes.get('/lancheId', selectLanchesFromId) 
routes.get('/lanches', selectLanches)

export default routes