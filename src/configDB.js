import sqlite3 from 'sqlite3' //  Importa o módulo sqlite3, que é um driver para interagir com bancos de dados
import { open } from 'sqlite' //Importa a função open do módulo sqlite. A função open é usada para abrir conexões com bancos de dados SQLite

export async function openDb () { //Define uma função assíncrona chamada openDb que será exportada para ser usada em outros arquivos. Essa função é responsável por abrir uma conexão com o banco de dados SQLite.
  return open({ // Dentro da função openDb, está sendo chamada a função open que foi importada anteriormente. Esta função é usada para criar uma conexão com o banco de dados SQLite.
    filename: './database.db', // Aqui, você está definindo o nome e o local do arquivo de banco de dados SQLite. Neste caso, o banco de dados será criado no diretório temporário /tmp com o nome database.db.
    driver: sqlite3.Database //Aqui, você está especificando o driver a ser usado para interagir com o banco de dados. O sqlite3.Database é o driver que está sendo usado para trabalhar com o SQLite.
  })
}