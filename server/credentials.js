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
var config ={
	credentials: {
		client_id: 'mh9JBqcVhnmK88GN0ehKjIw1KEq8st65',
		client_secret: '3A3MjkadqRuyjdqA',
		grant_type: 'client_credentials',
     	//response_type: 'code',
		scope:'data:write data:read data:create bucket:create bucket:read bucket:update',
		//redirect_uri: 'http://forgetester.azurewebsites.net/api/oauth2'
	},

	// If you which to use the Autodesk View & Data API on the staging server, change this url
	BaseEndPoint: 'https://developer.api.autodesk.com',
	Version: 'v1'
} ;

//&client_id=mh9JBqcVhnmK88GN0ehKjIw1KEq8st65&redirect_uri=http%3A%2F%2Fforgetester.azurewebsites.net%2Foauth2%2Fcallback&scope=data:read,data:write">Click here to grant access to your data!</a>

config.GetTokenEndPoint = config.BaseEndPoint + '/authentication/' + config.Version + '/gettoken';
config.AuthorizeEndPoint = config.BaseEndPoint + '/authentication/' + config.Version + '/authorize';

config.AuthenticateEndPoint =config.BaseEndPoint + '/authentication/' + config.Version + '/authenticate' ;

config.getBucketsDetailsEndPoint =config.BaseEndPoint + '/oss/' + config.Version + '/buckets/%s/details' ;
config.postBucketsEndPoint =config.BaseEndPoint + '/oss/' + config.Version + '/buckets' ;
config.putFileUploadEndPoint =config.BaseEndPoint + '/oss/' + config.Version + '/buckets/%s/objects/%s' ;
config.putFileUploadResumableEndPoint =config.BaseEndPoint + '/oss/' + config.Version + '/buckets/%s/objects/%s/resumable' ;
config.fileResumableChunk =40 ; // in Mb
config.getFileDetailsEndPoint =config.BaseEndPoint + '/oss/' + config.Version + '/buckets/%s/objects/%s/details' ;

config.postSetReferencesEndPoint =config.BaseEndPoint + '/references/' + config.Version + '/setreference' ;

config.postRegisterEndPoint =config.BaseEndPoint + '/viewingservice/' + config.Version + '/register' ;
config.getBubblesEndPoint =config.BaseEndPoint + '/viewingservice/' + config.Version + '/%s' ;
config.getStatusEndPoint =config.getBubblesEndPoint + '/status' ;
config.getAllEndPoint =config.getBubblesEndPoint + '/all' ;
config.getItemsEndPoint =config.BaseEndPoint + '/viewingservice/' + config.Version + '/items/%s' ;
config.getThumbnailsEndPoint =config.BaseEndPoint + '/viewingservice/' + config.Version + '/thumbnails/%s' ;

module.exports =config ;