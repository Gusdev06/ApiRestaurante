import { openDb } from '../configDB.js';






// --------- CRIAR TABELA -------------
export async function createTable() { //Aqui, uma função assíncrona chamada createTable é definida. Essa função será exportada e estará disponível para outros módulos que importarem este.
    openDb().then(db =>{ // Aqui, a função openDb é chamada. Presumivelmente, essa função retorna uma promessa que será resolvida com um objeto de banco de dados (db) quando a conexão com o banco de dados for estabelecida com sucesso.
        db.exec("CREATE TABLE IF NOT EXISTS pratos ( id INTEGER PRIMARY KEY, item TEXT, descricao TEXT, preco INTEGER, img TEXT, sem TEXT)") // Após a promessa ser resolvida, a função exec é chamada no objeto de banco de dados (db). Isso indica que este código está interagindo com um banco de dados SQLite, pois o método exec é frequentemente usado para executar consultas SQL em bancos de dados SQLite.

    })
}

// --------- INSERIR ITEM -------------

export async function insertprato(req, res) {  //Isso exporta a função insertprato como uma função assíncrona. Isso significa que a função pode conter operações assíncronas e retornar uma promessa.
    let pratos = req.body
    openDb().then(db =>{  //Aqui, a função openDb é chamada para abrir a conexão com o banco de dados. A função then é usada para lidar com a promessa retornada pela função openDb assim que a conexão for estabelecida com sucesso.
        db.run('INSERT INTO pratos (id , item , descricao, preco, img, sem) VALUES (?, ?, ?, ?, ?, ?)', //Dentro do bloco then, a função run é chamada no objeto db, que representa a conexão com o banco de dados. Isso indica que você está executando uma operação SQL na tabela "prato". A consulta 
         [pratos.id, pratos.item, pratos.descricao, pratos.preco, pratos.img])   // insere um novo registro na tabela "prato" com três colunas: "semana", "prato" e "price". Os valores são inseridos na consulta usando a notação ?, que é substituída pelos valores reais durante a execução. Os valores reais são fornecidos como um array [prato.semana, prato.prato, prato.price].
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function Updateprato(req, res) {  
    let pratos = req.body
    openDb().then(db =>{  
        db.run('UPDATE pratos SET item=?, descricao=?, preco=? , img=? WHERE id=?', 
        [pratos.id, pratos.item, pratos.descricao, pratos.preco,  pratos.img, pratos.id]) 
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------

export async function selectpratos(req, res) {  
    let pratos = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM pratos', )
        .then(pratos => res.json(pratos))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectprato(req, res) {  
    let id = req.body.id;
    openDb().then(db =>{  
        db.all('SELECT * FROM pratos WHERE id=?',[id] )
        .then(pratos =>res.json(pratos));
    });
  }

  export async function deletePratos(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM pratos WHERE id=?',[id] )
        .then(pratos => res.json(pratos))
    });
  }