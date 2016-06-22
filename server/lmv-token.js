//
// Copyright (c) Autodesk, Inc. All rights reserved 
//
// Node.js server workflow 
// by Cyrille Fauvel - Autodesk Developer Network (ADN)
// January 2015
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted, 
// provided that the above copyright notice appears in all copies and 
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting 
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS. 
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC. 
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//
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
/*

  var data = {
      client_id : config.credentials.client_id,
      client_secret: config.credentials.client_secret,
      grant_type: config.credentials.grant_type,
        code : config.credentials.code,
        redirect_uri :config.credentials.redirect_uri
  };

request.post({
	url: config.GetTokenEndPoint,
	form: data,	
	headers: {
		'Content-Type' : 'application/x-www-form-urlencoded' 	
	}
  },
	function(error, response, body){
	if (error){
			res.json(error);
		}
		else
		{	
		res.json(body)		;
			/*var data = body.data;
			var date =new Date () ;
			date.setTime (date.getTime () + (parseInt (data.expires_in) * 1000)) ; // ~30 minutes
			data.expires_at =date.toString () ;
			$.cookie ('accessToken', JSON.stringify (data), { expires: date }) ; //, secure: true }) ;
			res.redirect_uri("/");
		};
		
		});
  
});
*/

module.exports =router ;
