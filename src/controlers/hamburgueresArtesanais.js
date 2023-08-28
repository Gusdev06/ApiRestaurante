import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertHamburguer(req, res) { 
    let hamburgueresArtesanais = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO hamburgueresArtesanais (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [hamburgueresArtesanais.id, hamburgueresArtesanais.item, hamburgueresArtesanais.descricao, hamburgueresArtesanais.preco, hamburgueresArtesanais.img, hamburgueresArtesanais.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdateHamburguer(req, res) {  
    let hamburgueresArtesanais = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE hamburgueresArtesanais SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [hamburgueresArtesanais.item, hamburgueresArtesanais.descricao, hamburgueresArtesanais.preco, hamburgueresArtesanais.img, hamburgueresArtesanais.sem , hamburgueresArtesanais.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectHamburguers(req, res) {  
    let hamburgueresArtesanais = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM hamburgueresArtesanais', )
        .then(hamburgueresArtesanais => res.json(hamburgueresArtesanais))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectHamburguerFromId(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM hamburgueresArtesanais WHERE sem=? ',[sem] )
        .then(hamburgueresArtesanais =>res.json(hamburgueresArtesanais));
    });
  }

  export async function deleteHamburguer(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM hamburgueresArtesanais WHERE id=?',[id] )
        .then(hamburgueresArtesanais => res.json(hamburgueresArtesanais))
    });
  }