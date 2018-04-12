var Fizzle = require('fizzle');

var api = new Fizzle.DefaultApi()
api.ping().then(function(data) {
  console.log('API called successfully. Returned data: ', data);
}, function(error) {
  console.error(error);
});
