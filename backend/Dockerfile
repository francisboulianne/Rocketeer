FROM node:alpine

ARG ENVIRONMENT

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD ["yarn", "start" ]
