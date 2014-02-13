http = require('http');
var messages = [{"message":"hello"}, {"message":"goodbye"}];
var onRequest = function(req, res){
	console.log(req.method);
	res.writeHead(200, {
		"Connection": 'close',
		'Content-type':'application/JSON',
		'Access-Control-Allow-Origin':'*'
	});
	if (req.method === 'POST'){
		var postData = '';
		req.on('data', function(chunk){
			postData += chunk.toString();
		});
		req.on('end', function(){
			console.log('got POST data:');
			console.log(JSON.parse(postData));
			messages.push(JSON.parse(postData));
			
		});
	}
	if (req.method === "GET"){
		res.end(JSON.stringify(messages));
	}
	else{
		res.end('you prolly should use the GET or POST call')
	}	
};
var port = 12200;
http.createServer(onRequest).listen(port);
console.log(port);