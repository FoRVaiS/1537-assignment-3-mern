FROM node:lts

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build
RUN rm -rf src

ENV NODE_ENV=PRODUCTION

CMD ["npm", "run-script", "!start:docker"]
