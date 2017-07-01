function usuariosDAO (connection){
    this._connection = connection();
    
}

//Função inserir use
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

//função pesquisar use e autenticar
usuariosDAO.prototype.autenticar = function(usuario,req,res){
     //abrindo a conexao com o banco mongo db
    this._connection.open(function(err,mongoclient){
        //inserir dados ao banco
        mongoclient.collection("usuarios",function(err,collection){
            //collection.find({usuario:{$eq:usuario.usuario},senha:{$eq:usuario.senha}});//query mongo db procura
            //query de pesquisa simplificada
            collection.find(usuario).toArray(function(err,result){//result é os dados em um array
                if(result[0]!=undefined){//diferente de vazio
                    //criando a variaveis de sessão
                    req.session.autorizado = true;

                    req.session.usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }
                if(req.session.autorizado){
                    res.redirect('jogo');//redirect-evita que quando pressionado o f5 ele não reenvia o formulario
                }else{
                    res.render('index',{validacao:{}});
                }

            });

            mongoclient.close();
        });
    });

}


module.exports = function(){
    return usuariosDAO;
}