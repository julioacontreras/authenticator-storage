# Auth Microservice using DDD

This is a simple microservice using DDD architecture.

### Features

* Auth JWT
* Protocol GRPC
* MongoDB

### Architecture

![Architecture](doc/architecture.png)

### Getting started

```bash
# Run Microservice in shared mode to program in hot
# Run MongoDB Server
# Run GRPC Server
npm run docker

# Enter in this link
# Set file proto in path `./grpc/proto/data.proto`
http://localhost:6969/

# Can test using this action
{
  "action": "createUser",
  "data": "{\"username\": \"johnconnor\", \"password\": \"1234\"}"
}
 
```
