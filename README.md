Reproducer for [swagger-codegen issue 4819](https://github.com/swagger-api/swagger-codegen/issues/4819).  
Make sure you install all requirements:
```
npm install
```

then run the server:  

```
node server.js
```

It will offer a RESTful API on http://localhost:5000/ping which you can test.

Then please open:
http://localhost:5000/index.html
and look at JavaScript console.

Note that the bundle.js file was created using browserify, as explained in the swagger-codegen client's README.me file.
