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

app.use(express.static('static'))

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
  console.log("Server listening at http://localhost:%s", port);
  console.log("Example page is at http://localhost:%s/index.html", port);
  console.log("RESTful API call is at http://localhost:%s/ping", port);
});
