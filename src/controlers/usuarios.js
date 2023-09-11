import { openDb } from '../configDB.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'



// rota privada 




// --------- INSERIR ITEM -------------

export async function insertUser(req, res) { 
    const usuarios = req.body;

    if (!usuarios.name) {
        return res.status(422).json({ msg: "O nome é obrigatório" });
    }
    if (!usuarios.password) {
        return res.status(422).json({ msg: "A senha é obrigatório" });
    }
    
    if (!usuarios.email) {
        return res.status(422).json({ msg: "O Email é obrigatório" });
    }


    try {
        const db = await openDb();
        const existingUser = await db.get('SELECT * FROM usuarios WHERE email = ?', [usuarios.email]);

        if (existingUser) {
            return res.status(409).json({ error: "O email já está registrado" });
        }

        await db.run('INSERT INTO usuarios (name, email, password  ) VALUES (?, ?, ?)', [usuarios.name, usuarios.email, usuarios.password, ]);
        res.status(210).json({ msg: "Usuário inserido com sucesso" });


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao inserir usuário" });
    }
}


    export async function RotaPriv(req, res) {
    const id = req.params.id 


        const db = await openDb();
        const user = await db.get('SELECT id, name, email FROM usuarios WHERE id = ?', [id] );

        if(!user) {
            return res.status(404).json({ error: "Usuario nao encontrado" });
        
        }


        res.status(200).json({ user }) 
    }


    export function checkToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1]

        if(!token) {
            return res.status(401).json({ error: "Acesso negado!" });
        }

        try {

            const secret = process.env.SECRET

            jwt.verify(token, secret)

            next()

        } catch (error) {
            res.status(400).json({msg: "token invalido!"});
        }
    }

  
    export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const db = await openDb();

        // Verifique se o email corresponde a um usuário na tabela de usuários
        const user = await db.get('SELECT * FROM usuarios WHERE email = ?', [email]);

        if (!user) {
            // O email não corresponde a nenhum usuário
            return res.status(401).json({ error: "Email ou senha incorretos" });
        }

        // Verifique se a senha está correta
        if (user.password !== password) {
            return res.status(401).json({ error: "Email ou senha incorretos" });
        }


        
        const secret = process.env.SECRET

        const token = jwt.sign({ userId: user.id, email: user.email }, secret, { expiresIn: '1h' });

        res.status(200).json({ token });


    }  catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao realizar o login" });
    }
}


export async function selectUsers(req, res) {  
    let usuarios = req.body
    openDb().then(db =>{  
    db.all('SELECT * FROM usuarios', )
        .then(usuarios => res.json(usuarios))
    });


}


// // --------- ATUALIZAR ITEM -------------

// export async function updatePorcao(req, res) {  
//     let porcoes = req.body
//     openDb().then(db =>{  
//         db.run(
//             'UPDATE porcoes SET item=?, descricao=?, preco=?, img=? , sem=? WHERE id=?', 
//             [porcoes.item, porcoes.descricao, porcoes.preco, porcoes.img, porcoes.sem , porcoes.id])
//     });

//     res.json({
//         "statusCode": 200,
//     })
// }

// // --------- BUSCAR TODOS ITEM -------------


// export async function selectPorcoes(req, res) {  
//     let porcoes = req.body
//     openDb().then(db =>{  
//     db.all('SELECT * FROM porcoes', )
//         .then(porcoes => res.json(porcoes))
//     });


// }

// // --------- BUSCAR ITEM POR ID -------------

// export async function selectPorcoesFromSem(req, res) {  
//     let sem = req.body.sem;
//     openDb().then(db =>{  
//         db.all('SELECT * FROM porcoes WHERE sem=? ',[sem] )
//         .then(porcoes =>res.json(porcoes));
//     });
//   }

//   export async function deletePorcao(req, res) {
//     let id = req.body.id;
//     openDb().then(db =>{  
//     db.get('DELETE  FROM porcoes WHERE id=?',[id] )
//         .then(porcoes => res.json(porcoes))
//     });
//   }