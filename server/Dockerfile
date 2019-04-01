# specify the node base image with your desired version node:<version>
FROM node:9

# replace this with your application's default port
EXPOSE 4000

# In your Dockerfile.
WORKDIR server
COPY . .

RUN yarn install

CMD yarn start
#CMD node_modules/prisma/dist/index.js deploy
