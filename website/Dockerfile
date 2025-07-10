FROM node:23-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# # Now serve the ./out folder
# RUN npm install -g serve

EXPOSE 3000

# CMD ["serve", "-s", "out", "-l", "3000"]
CMD ["npm", "run", "start"]
