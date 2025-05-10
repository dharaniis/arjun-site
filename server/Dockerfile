FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY . .

RUN npm ci


CMD ["sh", "-c", "npm run db:deploy && npm run start"]