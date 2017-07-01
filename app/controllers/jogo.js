module.exports.jogo=function(application,req,res){
    //restringindo a pagina com uma variavel de sessão
    if(req.session.autorizado){
         res.render('jogo',{img_casa:req.session.casa});
    }else{
         res.render('index',{validacao:{}});
    }  
};

module.exports.sair=function(application,req,res){
   //destruindo a sessão
   req.session.destroy(function(err){
        res.render('index',{validacao:{}});
   })
};