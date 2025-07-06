# Authentication patterns

There are two types of authentication patterns:

1. **Stateful**
2. **Stateless**

## Stateless authentication

Stateless authentication is a method of authenticating users without maintaining session state on the server.  
This means that the server does not store any information about the user's session, and each request is treated as an independent request.  
Stateless authentication is typically used in RESTful APIs and microservices.  
It is often implemented using JSON Web Tokens (JWTs) or other token-based mechanisms.  
Stateless authentication is often used in modern web applications, mobile applications, and APIs.

## Stateful authentication

Stateful authentication is a method of authenticating users by maintaining session state on the server.  
This means that the server stores information about the user's session, such as the user's ID, authentication token, and other relevant data.  
Stateful authentication is typically used in traditional web applications.  
It is often implemented using cookies or session IDs.  
Stateful authentication is often used in web applications that require a high level of security and user experience.