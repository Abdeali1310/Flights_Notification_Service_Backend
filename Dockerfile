FROM node

WORKDIR /developer/flights_noti_service

COPY . .

RUN npm ci

CMD [ "npm","run","dev" ]