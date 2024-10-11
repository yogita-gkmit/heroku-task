FROM node:21-alpine


WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install



EXPOSE 3000

# CMD [ "node", "index.js" ]

# ENTRYPOINT node index.js

CMD [ "node", "index.js" ]

ENTRYPOINT [ "" ]