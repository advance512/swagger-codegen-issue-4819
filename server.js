var express = require('express');
var app = express();

var exampleData = {
	  "languages": [
	    "LANGUAGE_en",
	    "LANGUAGE_fr"
	  ],
	  "justOneLanguage": "LANGUAGE_ar",
	  someInt: 3
	};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(
	'/ping', 
	function(req, res, next) {
	  res.json(exampleData);
	}
);

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
