//importar o mango db
var mongo = require('mongodb');

var connMongoDB=function(){
    console.log("entrou na função");
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',//string contendo o endereço do servidor
            27017,//porta de conexao
            {}//objeto de conexao vazio

        ),
        {}//objeto de conexao vazio
    );
    return db;
}

module.exports = function(){
   return connMongoDB;
}