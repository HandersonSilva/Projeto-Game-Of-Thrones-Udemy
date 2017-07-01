function usuariosDAO (connection){
    this._connection = connection();
    
}

usuariosDAO.prototype.inserirUsuario = function(usuario){
   //abrindo a conexao com o banco mongo db
    this._connection.open(function(err,mongoclient){
        //inserir dados ao banco
        mongoclient.collection("usuarios",function(err,collection){
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}
module.exports = function(){
    return usuariosDAO;
}