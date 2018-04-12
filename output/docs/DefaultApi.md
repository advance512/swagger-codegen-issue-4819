# Fizzle.DefaultApi

All URIs are relative to *http://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](DefaultApi.md#ping) | **GET** /ping | 


<a name="ping"></a>
# **ping**
> SomeObject ping()



### Example
```javascript
var Fizzle = require('fizzle');

var apiInstance = new Fizzle.DefaultApi();
apiInstance.ping().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SomeObject**](SomeObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

