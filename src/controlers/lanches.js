import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertLanches(req, res) { 
    let lanches = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO lanches (id , item , descricao, preco, img) VALUES (?, ?, ?, ?, ?)', 
        [lanches.id, lanches.item, lanches.descricao, lanches.preco, lanches.img])  
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdateLanches(req, res) {  
    let lanches = req.body
    openDb().then(db =>{  
        db.run('UPDATE lanches SET item=?, descricao=?, preco=?, img=?,  id=?', 
        [lanches.item, lanches.descricao, lanches.preco, lanches.img, lanches.id]) 
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------

export async function selectLanches(req, res) {  
    let lanches = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM lanches', )
        .then(lanches => res.json(lanches))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectLanchesFromId(req, res) {  
    let id = req.body.id;
    openDb().then(db =>{  
        db.get('SELECT * FROM lanches WHERE id=? ',[id] )
        .then(lanches =>res.json(lanches));
    });
  }

  export async function deleteLanches(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM lanches WHERE id=?',[id] )
        .then(lanches => res.json(lanches))
    });
  }