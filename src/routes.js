import { Router } from "express";
import { insertPrato, updatePrato, selectPratosFromSem, selectPratos, deletePrato,} from './controlers/pratos.js';
import { insertPorcao, updatePorcao, selectPorcoes, selectPorcoesFromSem, deletePorcao,} from './controlers/porcoes.js';
import { insertLanches, UpdateLanches, selectLanches, selectLanchesFromId, deleteLanches,} from './controlers/lanches.js';
import { insertPaleta, UpdatePaleta, selectPaleta, selectParelaFromId, deletePaleta,} from './controlers/paleta.js';
import { insertHamburguer, UpdateHamburguer, selectHamburguers, selectHamburguerFromId, deleteHamburguer,} from './controlers/hamburgueresArtesanais.js';
import { insertBolo, UpdateBolo, selectBolos, selectbolosFromSem, deleteBolo,} from './controlers/bolos.js';
import { insertBeirute, UpdateBeirute, selectBeirutes, selectBeirutesFromSem, deleteBeirute,} from './controlers/beirutes.js';
import { insertBebida, UpdateBebibida, selectBebidas, selectBebidaFromSem, deleteBebida,} from './controlers/bebida.js';

import { checkAccessKey } from './key/key.js'

const routes = Router();

routes.get('/', (req , res) => {
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

// ---------- ROTA DE BEBIDAS

routes.post('/newbebida', checkAccessKey ,insertBebida) // rota priv
routes.put('/attbebida', checkAccessKey,  UpdateBebibida) // rota priv
routes.delete('/delbebida', checkAccessKey, deleteBebida) // rota priv
routes.get('/bebidaSem', selectBebidaFromSem) 
routes.get('/bebidas', selectBebidas)

// ---------- ROTA DE BEIRUTES

routes.post('/newbeirute', checkAccessKey ,insertBeirute) // rota priv
routes.put('/attbeirute', checkAccessKey,  UpdateBeirute) // rota priv
routes.delete('/delbeirute', checkAccessKey, deleteBeirute) // rota priv
routes.get('/beiruteSem', selectBeirutesFromSem) 
routes.get('/beirutes', selectBeirutes)

// ---------- ROTA DE PRATOS 

routes.post('/newprato', checkAccessKey ,insertPrato) // rota priv
routes.put('/attprato', checkAccessKey,  updatePrato) // rota priv
routes.delete('/delprato', checkAccessKey, deletePrato) // rota priv
routes.get('/pratoSem', selectPratosFromSem) 
routes.get('/pratos', selectPratos)

// --------- ROTA DE PORCOES

routes.post('/newporcao', checkAccessKey ,insertPorcao) // rota priv
routes.put('/attporcao', checkAccessKey,  updatePorcao) // rota priv
routes.delete('/delporcao', checkAccessKey, deletePorcao) // rota priv
routes.get('/porcaoSem', selectPorcoesFromSem) 
routes.get('/porcoes', selectPorcoes)

// ---------- ROTA DE LANCHES

routes.post('/newlanche', checkAccessKey ,insertLanches) // rota priv
routes.put('/attlanche', checkAccessKey,  UpdateLanches) // rota priv
routes.delete('/dellanche', checkAccessKey, deleteLanches) // rota priv
routes.get('/lancheId', selectLanchesFromId) 
routes.get('/lanches', selectLanches)

// ---------- ROTA DE PALETAS

routes.post('/newpaleta', checkAccessKey ,insertPaleta) // rota priv
routes.put('/attpaleta', checkAccessKey,  UpdatePaleta) // rota priv
routes.delete('/delpaleta', checkAccessKey, deletePaleta) // rota priv
routes.get('/paletaSem', selectParelaFromId) 
routes.get('/paletas', selectPaleta)

// ---------- ROTA DE HAMBURGUERES ARTESANAIS

routes.post('/newhamburguer', checkAccessKey ,insertHamburguer) // rota priv
routes.put('/atthamburguer', checkAccessKey,  UpdateHamburguer) // rota priv
routes.delete('/delhamburguer', checkAccessKey, deleteHamburguer) // rota priv
routes.get('/hamburguerSem', selectHamburguerFromId) 
routes.get('/hamburguers', selectHamburguers)

// ---------- ROTA DE BOLOS

routes.post('/newbolo', checkAccessKey ,insertBolo) // rota priv
routes.put('/attbolo', checkAccessKey,  UpdateBolo) // rota priv
routes.delete('/delbolo', checkAccessKey, deleteBolo) // rota priv
routes.get('/boloSem', selectbolosFromSem) 
routes.get('/bolos', selectBolos)

export default routes