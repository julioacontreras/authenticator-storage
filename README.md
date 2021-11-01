# Auth Microservice using DDD

This is a microservice using DDD architecture to storage User information.
### Tecnologies

* Protocol GRPC
* MongoDB

### Architecture

![Architecture](doc/architecture.png)

### Getting started

```bash
# Start graphana, prometheus, mongodb and grpcox
npm run docker

```

### Test with agents

```bash
# Run script to create 10000 users
npx ts-node ./src/console/agent.ts --create-user --repeat=10000

# Run script to update user
npx ts-node ./src/console/agent.ts --update-user --id=<id>

# Run script to delete user
npx ts-node ./src/console/agent.ts --delete-user --id=<id>

# Run script to delete user
npx ts-node ./src/console/agent.ts --find-user --id=<id>

# Run script to find users
npx ts-node ./src/console/agent.ts --find-users

```

### Porject settings

```bash
# Run in develop mode
npm run dev

# Run in production mode
npm run build
npm run start

```
