import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertPorcao(req, res) { 
    let porcoes = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO porcoes (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [porcoes.id, porcoes.item, porcoes.descricao, porcoes.preco, porcoes.img, porcoes.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function updatePorcao(req, res) {  
    let porcoes = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE porcoes SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [porcoes.item, porcoes.descricao, porcoes.preco, porcoes.img, porcoes.sem , porcoes.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectPorcoes(req, res) {  
    let porcoes = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM porcoes', )
        .then(porcoes => res.json(porcoes))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectPorcoesFromSem(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM porcoes WHERE sem=? ',[sem] )
        .then(porcoes =>res.json(porcoes));
    });
  }

  export async function deletePorcao(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM porcoes WHERE id=?',[id] )
        .then(porcoes => res.json(porcoes))
    });
  }