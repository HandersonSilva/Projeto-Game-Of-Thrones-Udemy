module.exports.home=function(application,req,res){
    res.render('index',{validacao:{}});

}
module.exports.autenticar=function(application,req,res){
        var dadosForm = req.body;
        //validando os campos com express-validation
        req.assert('usuario','Usuario não pode ser vazio').notEmpty();
        req.assert('senha','Senha não pode ser vazio').notEmpty();

        var erros = req.validationErrors();
        
        if(erros){
            res.render('index',{validacao:erros});
            return;
        }

        //Criando a conexão com o banco MongoDb
        var connection = application.config.dbConnection;
        var UsuarioDAO = new application.app.models.usuarioDAO(connection);

        UsuarioDAO.autenticar(dadosForm,req,res);


        
        //res.send('tudo certo OK!');
}