FROM node:latest AS development

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]

FROM node:latest AS production

WORKDIR /frontend

COPY package*.json ./

RUN npm install --production

COPY --from=development /frontend /frontend

RUN npm run build
RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
