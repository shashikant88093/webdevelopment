# Status Code 
## information response status codes (100-199)
### 100 Continue
- The server has received the request headers and the client should proceed to send the request body (if any).
- This is typically used in HTTP/1.1 to indicate that the initial part of the request has been received and the client can continue with the rest of the request.
- Example:
```http 
HTTP/1.1 100 Continue
```
### 101 Switching Protocols
- The server is switching protocols as requested by the client.
- This is used when the client requests a protocol change, such as upgrading from HTTP/1.1 to WebSocket.
- Example:
```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```
### 102 Processing
- The server has received and is processing the request, but no response is available yet.
- This status code is primarily used in WebDAV (Web Distributed Authoring and Versioning) applications.
- Example:
```http
HTTP/1.1 102 Processing
``` 
### 103 Early Hints
- The server is sending preliminary headers before the final response.
- This is used to allow the client to start preloading resources while the server is still processing
- the request.
- Example:
```http
HTTP/1.1 103 Early Hints
Link: </style.css>; rel=preload; as=style
```
## Success status codes (200-299)
### 200 OK
- The request has succeeded, and the server has returned the requested resource.
- This is the most common status code for successful HTTP requests.
- Example:
```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```
### 201 Created
- The request has been fulfilled, and a new resource has been created as a result.
- This is typically used in response to POST requests.
- Example:
```http
HTTP/1.1 201 Created
Location: /resource/123
Content-Type: application/json
{
    "id": 123,
    "name": "New Resource"
}
```
### 202 Accepted
- The request has been accepted for processing, but the processing is not yet complete.
- This status code is often used for asynchronous operations.
- Example:
- ```http
HTTP/1.1 202 Accepted
Content-Type: application/json
{
    "status": "Processing",
    "estimatedCompletionTime": "2023-10-01T12:00:00Z"
}
```
### 203 Non-Authoritative Information
- The server has successfully processed the request, but the returned metadata may not be the exact representation of the resource.
- This status code is used when the server is returning information from a third-party source.
- Example:
```http
HTTP/1.1 203 Non-Authoritative Information
Content-Type: application/json
{
    "message": "Data retrieved from a third-party source",
    "source": "https://api.example.com/resource"
}
```
### 204 No Content
- The server has successfully processed the request, but there is no content to return.
- This status code is often used for DELETE requests or when the server has no additional information to provide.
- Example:
  - ```http
HTTP/1.1 204 No Content
```
### 205 Reset Content
- The server has successfully processed the request, and the client should reset the document view.
- This status code is typically used in response to a PUT request when the client should clear the form or reset the view.
- Example:
```http
HTTP/1.1 205 Reset Content
Content-Type: application/json
{
    "message": "Form has been reset"
}
```
### 206 Partial Content
- The server is delivering only part of the resource due to a range request from the client.
- This status code is used when the client requests a specific range of bytes from a resource.
- Example:
```http
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-499/1234
Content-Length: 500
Content-Type: application/octet-stream
[Binary data for the first 500 bytes of the resource]
```
### 207 Multi-Status
- The server is returning multiple status codes for different parts of a multi-part request.
- This status code is primarily used in WebDAV applications.
- Example:
- ```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml
<?xml version="1.0" encoding="UTF-8"?>
<multistatus xmlns="DAV:">
    <response>
        <href>/resource/1</href>
        <status>HTTP/1.1 200 OK</status>
    </response>
    <response>
        <href>/resource/2</href>
        <status>HTTP/1.1 404 Not Found</status>
    </response>
    <response>
        <href>/resource/3</href>
        <status>HTTP/1.1 500 Internal Server Error</status>
    </response>
</multistatus>
### 208 Already Reported
- The server has already reported the status of the requested resource in a previous response.
- This status code is primarily used in WebDAV applications to avoid redundant reporting.
- Example:
```http
HTTP/1.1 208 Already Reported
Content-Type: application/json
{
    "message": "Resource has already been reported in a previous response"
}
```
### 226 IM Used
- The server has fulfilled a request for the resource and the response is a representation of the result of one or more instance manipulations applied to the current instance.
- This status code is primarily used in HTTP/1.1 to indicate that the server has successfully processed a request using the "Instance Manipulations" feature.
- Example:
```http
HTTP/1.1 226 IM Used
Content-Type: application/json
{
    "message": "Instance manipulation applied successfully",
    "result": {
        "instanceId": 123,
        "manipulationType": "resize",
        "newSize": "1024x768"
    }
}
```

## Redirection status codes (300-399)
### 300 Multiple Choices
- The requested resource has multiple representations, and the client can choose one from the list provided in the response.
- This status code is used when there are multiple options available for the requested resource.    
- Example:
```http
HTTP/1.1 300 Multiple Choices
Content-Type: application/json
{
    "message": "Multiple representations available",
    "choices": [
        {
            "name": "HTML",
            "url": "/resource.html"
        },
        {
            "name": "JSON",
            "url": "/resource.json"
        },
        {
            "name": "XML",
            "url": "/resource.xml"
        }
    ]
}
```
### 301 Moved Permanently
- The requested resource has been permanently moved to a new URL, and the client should use the new URL for future requests.
- This status code is used for permanent redirects.
- Example:
```http
HTTP/1.1 301 Moved Permanently
Location: https://www.example.com/new-resource
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Moved Permanently</h1>
    <p>The resource has been moved to <a href="https://www.example.com/new-resource">https://www.example.com/new-resource</a>.</p>
</body>
</html>

### 302 Found
- The requested resource has been temporarily moved to a different URL, and the client should use the new URL for this request only.
- This status code is used for temporary redirects.
```http
HTTP/1.1 302 Found
Location: https://www.example.com/temporary-resource
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Found</h1>
    <p>The resource has been temporarily moved to <a href="https://www.example.com/temporary-resource">https://www.example.com/temporary-resource</a>.</p>  
</body>
</html>
```
### 303 See Other
- The server is redirecting the client to a different URL to retrieve the requested resource.
- This status code is typically used in response to POST requests to redirect the client to a different resource.
- Example:
- ```http
HTTP/1.1 303 See Other
Location: https://www.example.com/other-resource
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>See Other</h1>
    <p>The resource can be found at <a href="https://www.example.com/other-resource">https://www.example.com/other-resource</a>.</p>
</body>
</html>
### 304 Not Modified
- The requested resource has not been modified since the last request, and the client can use the
- cached version.
- This status code is used to optimize bandwidth by allowing the client to use cached resources.
- Example:
```http
HTTP/1.1 304 Not Modified
Cache-Control: max-age=3600
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Not Modified</h1>
    <p>The resource has not been modified since the last request. You can use the cached version.</p>
</body>
</html>
```

### 305 Use Proxy
- The requested resource must be accessed through a proxy specified in the response.
- This status code is rarely used and has been deprecated in HTTP/1.1.
- Example:
```http
HTTP/1.1 305 Use Proxy
Location: https://proxy.example.com
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Use Proxy</h1>
    <p>The resource must be accessed through the proxy at <a href="https://proxy.example.com">https://proxy.example.com</a>.</p>
</body>
</html>
```

### 306 Switch Proxy
- This status code is no longer used and is reserved for future use.    
- It was previously used to indicate that the client should switch to a different proxy.
- Example:
```http
HTTP/1.1 306 Switch Proxy
Content-Type: text/html; charset=UTF-8
<html>
<body>  
    <h1>Switch Proxy</h1>
    <p>This status code is reserved for future use and is not currently implemented.</p>    
</body>
</html>
```
### 307 Temporary Redirect
- The requested resource has been temporarily moved to a different URL, and the client should use the new URL for this request only.
- This status code is similar to 302 Found but indicates that the request method should not change
- when following the redirect.
- Example:
```http
HTTP/1.1 307 Temporary Redirect
Location: https://www.example.com/temporary-resource
Content-Type: text/html; charset=UTF-8

<html>
<body>
    <h1>Temporary Redirect</h1>
    <p>The resource has been temporarily moved to <a href="https://www.example.com/temporary-resource">https://www.example.com/temporary-resource</a>.</p>
</body>
</html>
```
### 308 Permanent Redirect
- The requested resource has been permanently moved to a new URL, and the client should use the new URL for future requests.
- This status code is similar to 301 Moved Permanently but indicates that the request method
- should not change when following the redirect.
- Example:
- ```http
HTTP/1.1 308 Permanent Redirect
Location: https://www.example.com/new-resource
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Permanent Redirect</h1>
    <p>The resource has been permanently moved to <a href="https://www.example.com/new-resource">https://www.example.com/new-resource</a>.</p>
</body>
</html>
```

## Client error status codes (400-499)
### 400 Bad Request
- The server cannot process the request due to a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
- This status code indicates that the server cannot understand the request due to invalid syntax.
- Example:
- ```http
HTTP/1.1 400 Bad Request
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Bad Request</h1>
    <p>The server cannot process the request due to a client error. Please check your request syntax.</p>
</body>
</html>
```
### 401 Unauthorized
- The request requires user authentication, and the client must provide valid credentials to access the resource.
- This status code indicates that the client must authenticate itself to get the requested response.
- Example:
```http 
HTTP/1.1 401 Unauthorized
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Unauthorized</h1>
    <p>The request requires user authentication. Please provide valid credentials.</p>
</body>
</html>
```
### 402 Payment Required
- This status code is reserved for future use and is not currently implemented in HTTP/1.1.
- It was intended to be used for digital payment systems.
- Example:
```http
HTTP/1.1 402 Payment Required
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Payment Required</h1>
    <p>This status code is reserved for future use and is not currently implemented.</p>
</body>
</html>
```

### 403 Forbidden
- The server understood the request but refuses to authorize it.
- This status code indicates that the server is refusing to fulfill the request, even if the client has provided valid credentials.
- Example:
```http
HTTP/1.1 403 Forbidden
Content-Type: text/html; charset=UTF-8
<html>
<body>  
    <h1>Forbidden</h1>
    <p>The server understood the request, but it refuses to authorize it. You do not have permission to access this resource.</p>
</body>
</html>
```

### 404 Not Found
- The server cannot find the requested resource.
- This status code indicates that the server has not found anything matching the requested URL.
- Example:
```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Not Found</h1>
    <p>The requested resource could not be found on the server. Please check the URL and try again.</p>
</body>
</html>
```

### 405 Method Not Allowed
- The request method is not allowed for the requested resource.
- This status code indicates that the server understands the request method but does not allow it for the requested resource.
- Example:  
- ```http
HTTP/1.1 405 Method Not Allowed
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Method Not Allowed</h1>
    <p>The request method is not allowed for the requested resource. Please check the allowed methods and try again.</p>
</body>
</html>
```
### 406 Not Acceptable
- The requested resource is not available in a format that the client can accept.
- This status code indicates that the server cannot produce a response that matches the criteria specified in the request's Accept header.
- Example:
- ```http
  - HTTP/1.1 406 Not Acceptable
  - Content-Type: text/html; charset=UTF-8
  - <html>
  - <body>
  - <h1>Not Acceptable</h1>
    - <p>The requested resource is not available in a format that the client can accept. Please check the Accept header and try again.</p>
  - </body>
  - </html>
  - ```
  - ### 407 Proxy Authentication Required
  - The client must first authenticate itself with the proxy server before accessing the requested resource.
  - This status code is similar to 401 Unauthorized but specifically applies to proxy servers.
  - Example:
  - ```http
  - HTTP/1.1 407 Proxy Authentication Required
  - Content-Type: text/html; charset=UTF-8
  - <html>
  - <body>
  - <h1>Proxy Authentication Required</h1>
  - <p>The client must first authenticate itself with the proxy server before accessing the requested resource. Please provide valid proxy credentials.</p>
  - </body>
  - </html>
  - ```
  - ### 408 Request Timeout
- The server timed out waiting for the request from the client.
- This status code indicates that the server did not receive a complete request from the client within the server's allotted timeout period.
- Example:
- ```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Request Timeout</h1>
    <p>The server timed out waiting for the request from the client. Please try again later.</p>
</body>
</html>
```
### 409 Conflict
- The request could not be completed due to a conflict with the current state of the resource.
- This status code indicates that the request could not be processed because of a conflict with the current state of the resource, such as a version conflict or a duplicate resource.
- Example:
  - ```http
    - HTTP/1.1 409 Conflict
    - Content-Type: text/html; charset=UTF-8
    - <html>
    - <body>
    - <h1>Conflict</h1>
    - <p>The request could not be completed due to a conflict with the current state of the resource. Please resolve the conflict and try again.</p>
    - </body>
    - </html>
    - ```
    - ### 410 Gone
    - The requested resource is no longer available on the server and has been permanently removed.
- This status code indicates that the resource requested by the client is no longer available and has been
- permanently removed from the server.
- Example:
  - ```http
  - HTTP/1.1 410 Gone
  - Content-Type: text/html; charset=UTF-8  
  - <html>
  - <body>
  - <h1>Gone</h1>
  - <p>The requested resource is no longer available on the server and has been permanently removed
    - Please check the URL and try again.</p>
    - </body>
    - </html>
    - ```
    - ### 411 Length Required
- The server requires the Content-Length header to be present in the request.
- This status code indicates that the server requires the client to specify the Content-Length header in the request, which indicates the size of the request body.
- Example:
```http
HTTP/1.1 411 Length Required
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Length Required</h1>
    <p>The server requires the Content-Length header to be present in the request. Please include the Content-Length header and try again.</p>  
</body>
</html>
```
### 412 Precondition Failed
- The server does not meet one of the preconditions specified in the request headers.
- This status code indicates that the server cannot process the request because one or more preconditions specified in the request headers (such as If-Match, If-None-Match, If-Modified-Since, etc.) are not met.
- Example:
  - ```http
  - HTTP/1.1 412 Precondition Failed
  - Content-Type: text/html; charset=UTF-8
  - <html>
  - <body>
  - <h1>Precondition Failed</h1>
  - <p>The server does not meet one of the preconditions specified in the request headers
    - Please check the preconditions and try again.</p>
  - </body>
  - </html>
  - ```
  - ### 413 Payload Too Large
- The request payload is larger than the server is willing or able to process.
- This status code indicates that the server is refusing to process the request because the request payload (body) is too large for the server to handle.
- Example:
```http 
HTTP/1.1 413 Payload Too Large
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Payload Too Large</h1>
    <p>The request payload is larger than the server is willing or able to process. Please reduce the size of the request and try again.</p>
</body>
</html>
```
### 414 URI Too Long
- The request URI is longer than the server is willing to interpret.
- This status code indicates that the server is refusing to process the request because the request URI (Uniform Resource Identifier) is too long for the server to handle.
- Example:
```http 
HTTP/1.1 414 URI Too Long
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>URI Too Long</h1>
    <p>The request URI is longer than the server is willing to interpret. Please shorten the URI and try again.</p>
</body>
</html>
```

### 415 Unsupported Media Type
- The request entity has a media type that the server or resource does not support.
- This status code indicates that the server is refusing to process the request because the request entity (body) has a media type that the server or resource does not support.
- Example:
- ```http
HTTP/1.1 415 Unsupported Media Type
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Unsupported Media Type</h1>
    <p>The request entity has a media type that the server or resource does not support. Please check the Content-Type header and try again.</p>
</body>
</html>
```
### 416 Range Not Satisfiable
- The server cannot fulfill the request for a specific byte range of the requested resource.
- This status code indicates that the server cannot fulfill the request for a specific byte range of the requested resource, either because the range is invalid or because the resource does not support byte ranges.
- Example:
```http
HTTP/1.1 416 Range Not Satisfiable
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Range Not Satisfiable</h1>
    <p>The server cannot fulfill the request for a specific byte range of the requested resource. Please check the Range header and try again.</p>
</body>
</html>
```
### 417 Expectation Failed
- The server cannot meet the requirements specified in the Expect header of the request.
- This status code indicates that the server cannot meet the requirements specified in the Expect header of the request, such as Expect: 100-continue.
- Example:
```http
HTTP/1.1 417 Expectation Failed
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Expectation Failed</h1>
    <p>The server cannot meet the requirements specified in the Expect header of the request. Please check the Expect header and try again.</p>
</body>
</html>
```
### 418 I'm a teapot
- The server refuses to brew coffee because it is a teapot.
  - This status code is an April Fools' joke defined in RFC 2324, which is not a standard HTTP status code.
  - Example:
  - ```http
HTTP/1.1 418 I'm a teapot   
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>I'm a Teapot</h1>
    <p>The server refuses to brew coffee because it is a teapot. This is an April Fools' joke.</p>
</body>
</html>
```

## Server error status codes (500-599)
### 500 Internal Server Error
- The server encountered an unexpected condition that prevented it from fulfilling the request.
- This status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request
- Example:
```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Internal Server Error</h1>
    <p>The server encountered an unexpected condition that prevented it from fulfilling the request. Please try again later.</p>    
</body>
</html>
```

### 501 Not Implemented
- The server does not support the functionality required to fulfill the request.
- This status code indicates that the server does not support the functionality required to fulfill the request, such as a specific HTTP method or feature.
- Example:
- ```http
HTTP/1.1 501 Not Implemented
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Not Implemented</h1>
    <p>The server does not support the functionality required to fulfill the request. Please check the request and try again.</p>
</body>
</html>
```

### 502 Bad Gateway
- The server, while acting as a gateway or proxy, received an invalid response from the upstream
  - server.
- This status code indicates that the server, while acting as a gateway or proxy, received an   
- invalid response from the upstream server, such as a timeout or an error.
- Example:  
```http 
HTTP/1.1 502 Bad Gateway
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Bad Gateway</h1>
    <p>The server, while acting as a gateway or proxy, received an invalid response from the upstream server. Please try again later.</p>
</body>
</html>
```
### 503 Service Unavailable
- The server is currently unable to handle the request due to temporary overloading or maintenance of the server.
- This status code indicates that the server is currently unable to handle the request due to temporary overloading or maintenance of the server.
- Example:
- ```http
HTTP/1.1 503 Service Unavailable
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Service Unavailable</h1>
    <p>The server is currently unable to handle the request due to temporary overloading or maintenance of the server. Please try again later.</p>
</body>
</html>
```

### 504 Gateway Timeout
- The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.
- This status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server, such as a timeout or an error.
- Example:
- ```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Gateway Timeout</h1>
    <p>The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. Please try again later.</p>
</body>
</html>
```
### 505 HTTP Version Not Supported
- The server does not support the HTTP protocol version used in the request.
- This status code indicates that the server does not support the HTTP protocol version used in the request, such as HTTP/1.0 or HTTP/2.0.
  - Example:
  - ```http
    - HTTP/1.1 505 HTTP Version Not Supported
    - Content-Type: text/html; charset=UTF-8
    - <html>
    - <body>    
    - <h1>HTTP Version Not Supported</h1>
    - <p>The server does not support the HTTP protocol version used in the request. Please
      - check the HTTP version and try again.</p>
    - </body>
  - </html>
  - ```
### 506 Variant Also Negotiates
- The server has an internal configuration error and is unable to negotiate the requested resource.
- This status code indicates that the server has an internal configuration error and is unable to negotiate the
- requested resource, such as a conflict in content negotiation.
- Example:
```http

HTTP/1.1 506 Variant Also Negotiates
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Variant Also Negotiates</h1>
    <p>The server has an internal configuration error and is unable to negotiate the requested resource. Please try again later.</p>
</body>
</html>
```
### 507 Insufficient Storage
- The server is unable to store the representation needed to complete the request.
- This status code indicates that the server is unable to store the representation needed to complete the request   
- due to insufficient storage space.
- Example:
```http
HTTP/1.1 507 Insufficient Storage
Content-Type: text/html; charset=UTF-8
<html>
<body>

    <h1>Insufficient Storage</h1>
    <p>The server is unable to store the representation needed to complete the request due to insufficient storage space. Please try again later.</p>
</body>
</html>

```
### 508 Loop Detected
- The server detected an infinite loop while processing the request.
- This status code indicates that the server detected an infinite loop while processing the request, such as a recursive request that cannot be resolved.
- Example:
```http
HTTP/1.1 508 Loop Detected
Content-Type: text/html; charset=UTF-8
<html>
<body>
    <h1>Loop Detected</h1>
    <p>The server detected an infinite loop while processing the request. Please check the request and try again.</p>
</body>
</html>
```

