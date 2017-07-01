module.exports.cad = function(application,req,res){
    
    res.render('cadastro',{validacao:{},dadosForm:{}});
}
module.exports.cadastrar = function(application,req,res){
    var dadosForm = req.body;
    //validando os campos
    req.assert('nome','Nome não pode ser vazio').notEmpty();
    req.assert('usuario','Usuario não pode ser vazio').notEmpty();
    req.assert('senha','Senha não pode ser vazio').notEmpty();
    req.assert('casa','Casa não pode ser vazio').notEmpty();
    
    var erros = req.validationErrors();
    if(erros){
        res.render('cadastro',{validacao:erros,dadosForm:dadosForm});
        return;
    }
    res.send("podemos cadastrar!!!")
    //criando a conexão com o mongodb
    var connection = application.config.dbConnection;
    
    //instanciando o objeto
    var usuariosDAO = new application.app.models.usuarioDAO(connection);
     usuariosDAO.inserirUsuario(dadosForm);

     //geração de parametros
     var jogoDAO = new application.app.models.jogoDAO(connection);
     jogoDAO.gerarParametros(dadosForm.usuario);

}