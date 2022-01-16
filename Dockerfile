#### Build stage ####
FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY ./src ./src

RUN npm run build


#### Run stage ####
FROM node:14-alpine

ENV PORT 3000

WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

USER node

COPY --chown=node:node package*.json ./
RUN npm install --only=production

COPY --from=builder --chown=node:node /usr/src/app/build ./build
EXPOSE ${PORT}

CMD [ "node", "build/index.js" ]
