module.exports.jogo=function(application,req,res){
    //restringindo a pagina com uma variavel de sessão
    if(req.session.autorizado !== true){
        res.render('index',{validacao:{}});
        return;
    }
    
    //recuperando o usuario e casa da variavel de sessão
    var usuario = req.session.usuario;
    var casa = req.session.casa;
    //abrindo conexão com o banco
     var connection = application.config.dbConnection;
     var jogoDAO = new application.app.models.jogoDAO(connection);
     jogoDAO.iniciaJogo(res,usuario,casa);
    
     
};

module.exports.sair=function(application,req,res){
   //destruindo a sessão
   req.session.destroy(function(err){
        res.render('index',{validacao:{}});
   })
};

module.exports.suditos =function(application,req,res){
    res.render('aldeoes');

};

module.exports.pergaminhos =function(application,req,res){

    res.render('pergaminhos');
};