import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertBebida(req, res) { 
    let bebida = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO bebida (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [bebida.id, bebida.item, bebida.descricao, bebida.preco, bebida.img, bebida.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdateBebibida(req, res) {  
    let bebida = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE bebida SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [bebida.item, bebida.descricao, bebida.preco, bebida.img, bebida.sem , bebida.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectBebidas(req, res) {  
    let bebida = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM bebida', )
        .then(bebida => res.json(bebida))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectBebidaFromSem(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM bebida WHERE sem=? ',[sem] )
        .then(bebida =>res.json(bebida));
    });
  }

  export async function deleteBebida(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM bebida WHERE id=?',[id] )
        .then(bebida => res.json(bebida))
    });
  }