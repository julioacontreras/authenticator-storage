FROM node:14

# prepapre image
WORKDIR /var/www/html/app
COPY . .
RUN npm i
RUN npm run build

# prepapre container
CMD node ./dist/index.js
