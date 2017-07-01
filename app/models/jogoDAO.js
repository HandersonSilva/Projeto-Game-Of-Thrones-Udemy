function jogoDAO (connection){
    this._connection = connection();
    
}

jogoDAO.prototype.gerarParametros =function(usuario){
    //abrindo a conexao com o banco mongo db
    this._connection.open(function(err,mongoclient){
        //inserir dados ao banco
        mongoclient.collection("jogo",function(err,collection){
            collection.insert({
                usuario:usuario,
                moeda:15,
                suditos:10,
                temor:Math.floor(Math.random()*100),    //0 or 1 , 0,456776 * 1000 = 456,776  floor
                sabedoria:Math.floor(Math.random()*100) ,
                comercio:Math.floor(Math.random()*100) ,
                magia:Math.floor(Math.random()*100) 
            });
            mongoclient.close();
        });
    });
}


module.exports = function(){
    return jogoDAO;
}