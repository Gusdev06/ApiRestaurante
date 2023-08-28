import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertBolo(req, res) { 
    let bolos = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO bolos (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [bolos.id, bolos.item, bolos.descricao, bolos.preco, bolos.img, bolos.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdateBolo(req, res) {  
    let bolos = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE bolos SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [bolos.item, bolos.descricao, bolos.preco, bolos.img, bolos.sem , bolos.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectBolos(req, res) {  
    let bolos = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM bolos', )
        .then(bolos => res.json(bolos))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectbolosFromSem(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM bolos WHERE sem=? ',[sem] )
        .then(bolos =>res.json(bolos));
    });
  }

  export async function deleteBolo(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM bolos WHERE id=?',[id] )
        .then(bolos => res.json(bolos))
    });
  }