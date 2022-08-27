FROM node:16.16.0
USER root
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
RUN chown -R node:node ./node_modules
CMD [ "npm", "run", "serve" ]