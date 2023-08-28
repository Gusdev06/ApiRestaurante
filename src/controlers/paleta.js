import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertPaleta(req, res) { 
    let paleta = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO paleta (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [paleta.id, paleta.item, paleta.descricao, paleta.preco, paleta.img, paleta.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdatePaleta(req, res) {  
    let paleta = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE paleta SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [paleta.item, paleta.descricao, paleta.preco, paleta.img, paleta.sem , paleta.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectPaleta(req, res) {  
    let paleta = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM paleta', )
        .then(paleta => res.json(paleta))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectParelaFromId(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM paleta WHERE sem=? ',[sem] )
        .then(paleta =>res.json(paleta));
    });
  }

  export async function deletePaleta(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM paleta WHERE id=?',[id] )
        .then(paleta => res.json(paleta))
    });
  }