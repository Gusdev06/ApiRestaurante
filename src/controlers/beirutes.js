import { openDb } from '../configDB.js';



// --------- INSERIR ITEM -------------

export async function insertBeirute(req, res) { 
    let beirutes = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO beirutes (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [beirutes.id, beirutes.item, beirutes.descricao, beirutes.preco, beirutes.img, beirutes.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdateBeirute(req, res) {  
    let beirutes = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE beirutes SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [beirutes.item, beirutes.descricao, beirutes.preco, beirutes.img, beirutes.sem , beirutes.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectBeirutes(req, res) {  
    let beirutes = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM beirutes', )
        .then(beirutes => res.json(beirutes))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectBeirutesFromSem(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM beirutes WHERE sem=? ',[sem] )
        .then(beirutes =>res.json(beirutes));
    });
  }

  export async function deleteBeirute(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM beirutes WHERE id=?',[id] )
        .then(beirutes => res.json(beirutes))
    });
  }