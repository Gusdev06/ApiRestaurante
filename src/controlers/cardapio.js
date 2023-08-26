import { openDb } from '../configDB.js';
const key = '5e4dffaaebf0740d2964a6e6f5289c3f'

export async function checkAccessKey(req, res, next) {
    const providedKey = req.headers['x-access-key']; // Chave de acesso enviada no header

    if (providedKey === key) {
        next();
    } else {
        res.status(403).json({ message: 'Acesso proibido' });
    }
}





// --------- CRIAR TABELA -------------

export async function createTable() { //Aqui, uma função assíncrona chamada createTable é definida. Essa função será exportada e estará disponível para outros módulos que importarem este.
    openDb().then(db =>{ // Aqui, a função openDb é chamada. Presumivelmente, essa função retorna uma promessa que será resolvida com um objeto de banco de dados (db) quando a conexão com o banco de dados for estabelecida com sucesso.
        db.exec("CREATE TABLE IF NOT EXISTS cardapio ( id INTEGER PRIMARY KEY, semana TEXT, Prato TEXT, price INTEGER)") // Após a promessa ser resolvida, a função exec é chamada no objeto de banco de dados (db). Isso indica que este código está interagindo com um banco de dados SQLite, pois o método exec é frequentemente usado para executar consultas SQL em bancos de dados SQLite.

    })
}


// --------- INSERIR ITEM -------------

export async function insertCardapio(req, res) {  //Isso exporta a função insertCardapio como uma função assíncrona. Isso significa que a função pode conter operações assíncronas e retornar uma promessa.
    let cardapio = req.body
    openDb().then(db =>{  //Aqui, a função openDb é chamada para abrir a conexão com o banco de dados. A função then é usada para lidar com a promessa retornada pela função openDb assim que a conexão for estabelecida com sucesso.
        db.run('INSERT INTO cardapio (semana, prato, price) VALUES (?, ?, ?)', //Dentro do bloco then, a função run é chamada no objeto db, que representa a conexão com o banco de dados. Isso indica que você está executando uma operação SQL na tabela "cardapio". A consulta 
         [cardapio.semana, cardapio.prato, cardapio.price])   // insere um novo registro na tabela "cardapio" com três colunas: "semana", "prato" e "price". Os valores são inseridos na consulta usando a notação ?, que é substituída pelos valores reais durante a execução. Os valores reais são fornecidos como um array [cardapio.semana, cardapio.prato, cardapio.price].
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- ATUALIZAR ITEM -------------

export async function UpdateCardapio(req, res) {  
    let cardapio = req.body
    openDb().then(db =>{  
        db.run('UPDATE cardapio SET semana=?, prato=?, price=? WHERE id=?', 
        [cardapio.semana, cardapio.prato, cardapio.price, cardapio.id]) 
    });

    res.json({
        "statusCode": 200,
    })
}

// --------- BUSCAR TODOS ITEM -------------

export async function selectCardapios(req, res) {  
    let cardapios = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM CARDAPIO', )
        .then(cardapios => res.json(cardapios))
    });


}

// --------- BUSCAR ITEM POR ID -------------

export async function selectPratos(req, res) {  
    let id = req.body.id;
    openDb().then(db =>{  
        db.get('SELECT * FROM cardapio WHERE id=?',[id] )
        .then(cardapio =>res.json(cardapio));
    });
  }

  export async function deletePratos(req, res) {
    let id = req.body.id;
    openDb().then(db =>{  
    db.get('DELETE  FROM cardapio WHERE id=?',[id] )
        .then(cardapio => res.json(cardapio))
    });
  }