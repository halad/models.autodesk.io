
var express =require ('express') ;
var request =require ('request') ;
var unirest =require('unirest') ;
var config =require ('./credentials') ;
var qs = require('querystring');

var router =express.Router () ;


router.get('/token', function(req,res){
    //config.credentials.client_id =req.query.key;      
	//config.client_secret= req.query.secret;

    var data = {
		client_id : config.credentials.client_id,
		redirect_uri: config.credentials.redirect_uri,
		response_type: 'code',
		scope:'data:write data:read data:create bucket:create bucket:read bucket:update' 
	};
  
var uri = config.AuthorizeEndPoint + '?' + qs.stringify(data);
res.redirect(uri);

});


//callback for three legged
router.get ('/oauth2', function (req, res) {
  config.credentials.code = req.query.code;

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
		if (error)
			res.json(error);
		else{
			var data = body;
			var date =new Date () ;
			date.setTime (date.getTime () + (parseInt (data.expires_in) * 1000)) ; // ~30 minutes
			data.expires_at =date.toString () ;
	    res.cookie('accessToken', JSON.stringify(data), {expires: date});		
		res.json(data);	
		}
		
	});
  

});

module.exports =router ;
