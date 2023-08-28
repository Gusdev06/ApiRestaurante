import { openDb } from '../configDB.js';






// --------- CRIAR TABELA -------------
export async function createTable() { //Aqui, uma função assíncrona chamada createTable é definida. Essa função será exportada e estará disponível para outros módulos que importarem este.
    openDb().then(db =>{ // Aqui, a função openDb é chamada. Presumivelmente, essa função retorna uma promessa que será resolvida com um objeto de banco de dados (db) quando a conexão com o banco de dados for estabelecida com sucesso.
        db.exec("CREATE TABLE IF NOT EXISTS pratos ( id INTEGER PRIMARY KEY, item TEXT, descricao TEXT, preco INTEGER, img TEXT, sem TEXT)") // Após a promessa ser resolvida, a função exec é chamada no objeto de banco de dados (db). Isso indica que este código está interagindo com um banco de dados SQLite, pois o método exec é frequentemente usado para executar consultas SQL em bancos de dados SQLite.

    })
}

// --------- INSERIR ITEM -------------

export async function insertPrato(req, res) { 
    let pratos = req.body
    openDb().then(db =>{  
        db.run('INSERT INTO pratos (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', 
        [pratos.id, pratos.item, pratos.descricao, pratos.preco, pratos.img, pratos.sem])  
        console.log();
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function updatePrato(req, res) {  
    let pratos = req.body
    openDb().then(db =>{  
        db.run(
            'UPDATE pratos SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
            [pratos.item, pratos.descricao, pratos.preco, pratos.img, pratos.sem , pratos.id])
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------


export async function selectPratos(req, res) {  
    let pratos = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM pratos', )
        .then(pratos => res.json(pratos))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectPratosFromSem(req, res) {  
    let sem = req.body.sem;
    openDb().then(db =>{  
        db.all('SELECT * FROM pratos WHERE sem=? ',[sem] )
        .then(pratos =>res.json(pratos));
    });
  }

  export async function deletePrato(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM pratos WHERE id=?',[id] )
        .then(pratos => res.json(pratos))
    });
  }