FROM node:14

# prepapre image
WORKDIR /var/www/html/app
RUN npm i
RUN npm i -g pm2

# prepapre container
CMD npm run build
CMD node ./dist/authenticator-storage/src/index.js
