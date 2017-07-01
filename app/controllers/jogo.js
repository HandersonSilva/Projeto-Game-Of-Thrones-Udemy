module.exports.jogo=function(application,req,res){
    //restringindo a pagina com uma variavel de sessão
    if(req.session.autorizado){
         res.render('jogo');
    }else{
        res.send('Usuario precisa fazer login!!!');
    }  
};