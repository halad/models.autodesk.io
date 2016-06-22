
var express =require ('express') ;
var request =require ('request') ;
var unirest =require('unirest') ;
var config =require ('./credentials') ;
var qs = require('querystring');

var router =express.Router () ;


router.get ('/token', function (req, res) {		
//config.credentials.client_id =req.query.key ;	
//config.credentials.client_secret= req.query.secret ;	      
unirest.post (config.AuthenticateEndPoint)	
.header ('Accept', 'application/json')		
.send (config.credentials)
.end (function (response) {	
    res.json (response.body) 
  });		
}) ;		


router.post ('/token', function (req, res) {
	//config.credentials.client_id =req.body.key ;		
	//config.credentials.client_secret= req.body.secret ;		
unirest.post (config.AuthenticateEndPoint)	
	.header ('Accept', 'application/json')
	.send (config.credentials)
	.end (function (response) {		
		res.json (response.body) ;
		});
});

module.exports =router ;
