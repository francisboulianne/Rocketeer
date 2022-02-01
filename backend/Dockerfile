FROM node:alpine

ARG ENVIRONMENT

WORKDIR /app

COPY . .
EXPOSE 8080

RUN yarn
RUN yarn build

CMD ["yarn", "start" ]
