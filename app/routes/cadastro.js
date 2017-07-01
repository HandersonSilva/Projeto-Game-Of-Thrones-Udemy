module.exports = function(application){
	application.get('/cadastro', function(req, res){
        
		application.app.controllers.cadastro.cad(application,req,res);
        console.log("chamando a pagina cadastro");
	});
	application.post('/cadastrar', function(req, res){
         console.log("chamando a pagina cadastrar");
		application.app.controllers.cadastro.cadastrar(application,req,res);
       
	});
}